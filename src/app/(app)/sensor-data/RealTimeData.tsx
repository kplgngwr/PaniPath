'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WaterQualityData {
  pH: number;
  turbidity: number;
  tds: number;
  BOD: number;
  NH4: number;
  timestamp: number;
}

const RealTimeData: React.FC = () => {
  const [data, setData] = useState<WaterQualityData[]>([]);

  useEffect(() => {
    let counter = 0;
    let currentData: WaterQualityData | null = null;

    // Fetch initial data from Firebase
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://water-monitoring-e2997-default-rtdb.firebaseio.com/.json'
        );
        const firebaseData = await response.json();

        if (firebaseData) {
          currentData = {
            pH: 7 + Math.random() * 2, // Placeholder for pH
            turbidity: firebaseData.sensors.turbidity || 10,
            tds: firebaseData.sensors.tds || 10,
            BOD: 10 + Math.random() * 5, // Placeholder for BOD
            NH4: 4 + Math.random() * 2, // Placeholder for NH4
            timestamp: Date.now(),
          };
          setData(prevData => [...prevData, currentData!]);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      if (counter === 0 || counter >= 8) {
        fetchData(); // Fetch updated data every 8 seconds
        counter = 0;
      }

      if (currentData) {
        setData(prevData => [
          ...prevData,
          {
            ...currentData!,
            timestamp: Date.now(),
          },
        ]);
      }

      counter++;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartData: ChartData<'line'> = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Turbidity',
        data: data.map(d => d.turbidity),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'TDS',
        data: data.map(d => d.tds),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-time Water Quality Data',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default RealTimeData;





// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ChartData,
//   ChartOptions,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface WaterQualityData {
//   pH: number;
//   turbidity: number;
//   tds: number;
//   BOD: number;
//   NH4: number;
//   timestamp: number;
// }

// const RealTimeData: React.FC = () => {
//   const [data, setData] = useState<WaterQualityData[]>([]);

//   useEffect(() => {
//     let counter = 0;
//     let currentData: WaterQualityData | null = null;

//     // Fetch initial data from Firebase
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://water-monitoring-e2997-default-rtdb.firebaseio.com/.json'
//         );
//         const firebaseData = await response.json();

//         if (firebaseData) {
//           currentData = {
//             pH: 7 + Math.random() * 2, // Placeholder for pH
//             turbidity: firebaseData.sensor.turbidity || 10,
//             tds: firebaseData.sensor.tds || 10,
//             BOD: 10 + Math.random() * 5, // Placeholder for BOD
//             NH4: 4 + Math.random() * 2, // Placeholder for NH4
//             timestamp: Date.now(),
//           };
//           setData(prevData => [...prevData, currentData!]);
//         }
//       } catch (error) {
//         console.error('Error fetching data from Firebase:', error);
//       }
//     };

//     fetchData(); // Initial fetch

//     const interval = setInterval(() => {
//       if (counter === 0 || counter >= 8) {
//         fetchData(); // Fetch updated data every 8 seconds
//         counter = 0;
//       }

//       if (currentData) {
//         setData(prevData => [
//           ...prevData,
//           {
//             ...currentData!,
//             timestamp: Date.now(),
//           },
//         ]);
//       }

//       counter++;
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const chartData: ChartData<'line'> = {
//     labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
//     datasets: [
//       {
//         label: 'pH',
//         data: data.map(d => d.pH),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         yAxisID: 'y-axis-ph',
//       },
//       {
//         label: 'Turbidity',
//         data: data.map(d => d.turbidity),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         yAxisID: 'y-axis-turbidity',
//       },
//       {
//         label: 'TDS',
//         data: data.map(d => d.tds),
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.5)',
//         yAxisID: 'y-axis-tds',
//       },
//       {
//         label: 'BOD',
//         data: data.map(d => d.BOD),
//         borderColor: 'rgb(153, 102, 255)',
//         backgroundColor: 'rgba(153, 102, 255, 0.5)',
//         yAxisID: 'y-axis-bod',
//       },
//       {
//         label: 'NH4',
//         data: data.map(d => d.NH4),
//         borderColor: 'rgb(255, 205, 86)',
//         backgroundColor: 'rgba(255, 205, 86, 0.5)',
//         yAxisID: 'y-axis-nh4',
//       },
//     ],
//   };

//   const options: ChartOptions<'line'> = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Real-time Water Quality Data',
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Time',
//         },
//       },
//       'y-axis-ph': {
//         type: 'linear',
//         position: 'left',
//         title: {
//           display: true,
//           text: 'pH',
//         },
//       },
//       'y-axis-turbidity': {
//         type: 'linear',
//         position: 'right',
//         title: {
//           display: true,
//           text: 'Turbidity',
//         },
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//       'y-axis-tds': {
//         type: 'linear',
//         position: 'right',
//         title: {
//           display: true,
//           text: 'TDS',
//         },
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//       'y-axis-bod': {
//         type: 'linear',
//         position: 'right',
//         title: {
//           display: true,
//           text: 'BOD',
//         },
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//       'y-axis-nh4': {
//         type: 'linear',
//         position: 'right',
//         title: {
//           display: true,
//           text: 'NH4',
//         },
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '80%', margin: 'auto' }}>
//       <Line options={options} data={chartData} />
//     </div>
//   );
// };

// export default RealTimeData;
