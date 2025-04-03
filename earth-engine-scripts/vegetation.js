// Define static timeframes
var startDate = ee.Date('2019-01-01');
var endDate = ee.Date('2024-12-31');

// Visualization parameters
var imageVisParam = {opacity: 1, min: -1, max: 1, palette: ['0400ff', '00ffff', 'ffc2c2', 'ff7474', '00ff43']};
var turbidityVis = {min: 0, max: 0.1, palette: ['blue', 'green', 'yellow', 'red']};

// Function to calculate MNDWI
var calculateMNDWI = function(image) {
  return image.normalizedDifference(['B3', 'B11']).rename('MNDWI').add(1);
};
var scaledSubtract = function(img1, img2, scale) {
  return img1.subtract(img2).multiply(scale);
};

// Function to perform a scaled addition
var scaledAdd = function(img1, img2, scale) {
  return img1.add(img2).multiply(scale);
};

// Function to calculate AWEI
var calculateAWEI = function(image) {
  // Check if all necessary bands exist; if not, return an empty image
  var blue = image.select('B2');
  var green = image.select('B3');
  var SWIR1 = image.select('B11');
  var NIR = image.select('B8');

  // Calculate AWEI using helper functions
  var green_minus_SWIR1 = scaledSubtract(green, SWIR1, 4);
  var blue_plus_NIR = scaledAdd(blue, NIR, 2.75);
  var blue_plus_NIR_scaled = blue_plus_NIR.multiply(0.25);
  var awei = green_minus_SWIR1.subtract(blue_plus_NIR_scaled).rename('AWEI');

  return awei;
};
// Optimized cloud masking function
var maskClouds = function(image) {
  var qa = image.select('QA60');
  var mask = qa.bitwiseAnd(1 << 10).eq(0).and(qa.bitwiseAnd(1 << 11).eq(0));
  return image.updateMask(mask);
};

// Function to prepare the collection
var prepareCollection = function(centerDate, geometry) {
  var startDate = centerDate.advance(-1.5, 'month');
  var endDate = centerDate.advance(1.5, 'month');
  return ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(geometry)
    .filterDate(startDate, endDate)
    .map(maskClouds)
    .sort('CLOUDY_PIXEL_PERCENTAGE');
};

// Define the center location for New Delhi
var newDelhi = ee.Geometry.Point([77.2167, 28.6448]);
Map.centerObject(newDelhi, 8);

// Map click function
Map.onClick(function(coords) {
  var point = ee.Geometry.Point(coords.lon, coords.lat);
  var geometry = point.buffer(5000);

  var collection = prepareCollection(startDate.advance(5, 'year'), geometry);
  var leastCloudyImage = ee.Image(collection.first());

  // Calculate NDVI, MNDWI, and Turbidity (using Red band)
  var ndvi = leastCloudyImage.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var mndwi = calculateMNDWI(leastCloudyImage);
  var turbidity = leastCloudyImage.select('B4').multiply(0.0001);

  // Combine NDVI and MNDWI for the vegetation layer
  var vegetation = mndwi.where(mndwi.gte(1), ndvi);

  // Calculate AWEI for a more robust water mask
  var awei = calculateAWEI(leastCloudyImage);

  // Smooth the AWEI image (optional)
  var smoothedAWEI = awei.focal_mean(1, 'circle', 'meters');

  // Use AWEI for the water mask
  var waterMask = smoothedAWEI.gte(0); // Adjust threshold as needed
  turbidity = turbidity.updateMask(waterMask);

  // Display layers
  Map.clear();
  Map.centerObject(geometry, 12);
  Map.addLayer(vegetation, imageVisParam, 'Vegetation');
  var turbidityLayer = Map.addLayer(turbidity, turbidityVis, 'Turbidity', false);

  // Checkbox for turbidity layer visibility
  var turbidityCheckbox = ui.Checkbox({
    label: 'Show Turbidity',
    value: false,
    onChange: function(checked) {
      turbidityLayer.setShown(checked);
    }
  });

  var panel = ui.Panel([turbidityCheckbox], ui.Panel.Layout.Flow('horizontal'));
  //Map.add(panel);
});

print('Click on the map to visualize vegetation and turbidity.');