'use client'

// src/components/PlasticWaterChart.tsx
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the type for the data structure
interface PlasticWaterData {
    plastic_area: number;
    plastic_percentage: string;
    water_area: number;
    water_percentage: string;
}

const PlasticWaterChart = () => {
    const [data, setData] = useState<PlasticWaterData | null>(null);
    const [chartData, setChartData] = useState<any>({
        labels: [],
        datasets: [
            {
                label: 'Plastic Area',
                data: [],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Water Area',
                data: [],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            }
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://monitoring-plastic-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
                const data: PlasticWaterData = await response.json();
                setData(data);

                // Update chart data with new values
                setChartData((prevData: any) => ({
                    ...prevData,
                    labels: [...prevData.labels, new Date().toLocaleTimeString()], // Add current time as label
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: [...prevData.datasets[0].data, data.plastic_area], // Add plastic area value
                        },
                        {
                            ...prevData.datasets[1],
                            data: [...prevData.datasets[1].data, data.water_area], // Add water area value
                        },
                    ],
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data every second
        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            {data && (
                <div style={{ width: '80%', margin: 'auto' }}>
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            scales: {
                                x: {
                                    type: 'category',
                                },
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default PlasticWaterChart;
