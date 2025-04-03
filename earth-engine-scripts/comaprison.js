// Define static timeframes
var startDate = ee.Date('2019-01-01');
var endDate = ee.Date('2024-12-31');

// Visualization parameters
var mndwiVis = {min: -0.5, max: 1, palette: ['red', 'yellow', 'green', 'cyan', 'blue']};
var changeVis = {min: -1, max: 1, palette: ['red', 'white', 'blue']};

// Function to calculate MNDWI and mask
var calculateAndMask = function(image) {
  return image.addBands(image.normalizedDifference(['B3', 'B11']).rename('MNDWI'))
              .updateMask(image.normalizedDifference(['B3', 'B11']).gte(0));
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
    .map(calculateAndMask)
    .sort('CLOUDY_PIXEL_PERCENTAGE');
};

// Define the center location for New Delhi
var newDelhi = ee.Geometry.Point([77.2167, 28.6448]);
Map.centerObject(newDelhi, 8);

// Set the default map type to satellite
Map.setOptions('SATELLITE');

// Map click function
Map.onClick(function(coords) {
  var point = ee.Geometry.Point(coords.lon, coords.lat);
  var geometry = point.buffer(5000);

  var collection1 = prepareCollection(startDate, geometry);
  var collection2 = prepareCollection(startDate.advance(5, 'year'), geometry);

  var mndwiVis1 = collection1.first().select('MNDWI');
  var mndwiVis2 = collection2.first().select('MNDWI');

  var difference = mndwiVis2.mask().subtract(mndwiVis1.mask());
  var changedPixels = difference.neq(0);
  difference = difference.updateMask(changedPixels);

  Map.clear();
  Map.centerObject(geometry, 12);

   // Newer MNDWI layer visible by default
  var mndwiLayer2 = Map.addLayer(mndwiVis2, mndwiVis, 'MNDWI ' + startDate.advance(5, 'year').format('YYYY').getInfo());
  var mndwiLayer1 = Map.addLayer(mndwiVis1, mndwiVis, 'MNDWI ' + startDate.format('YYYY').getInfo(), false);
  var differenceLayer = Map.addLayer(difference, changeVis, 'Water Change', false);

  // Checkboxes to control layer visibility
  var mndwi1Checkbox = ui.Checkbox({
    label: 'Show MNDWI ' + startDate.format('YYYY').getInfo(),
    value: false,
    onChange: function(checked) {
      mndwiLayer1.setShown(checked);
    }
  });

  var differenceCheckbox = ui.Checkbox({
    label: 'Show Water Change',
    value: false,
    onChange: function(checked) {
      differenceLayer.setShown(checked);
    }
  });


  var panel = ui.Panel([mndwi1Checkbox, differenceCheckbox], ui.Panel.Layout.Flow('horizontal'));
  Map.add(panel);

});

print('Click on the map to analyze water changes.');