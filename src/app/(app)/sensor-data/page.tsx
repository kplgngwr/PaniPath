import React from 'react'
import RealtimeChart from './RealTimeData'
import PlasticWaterChart from './PlasticWaterChart'

const page = () => {
    return (
        <div className="w-full mb-20">
            <main className="bg-white">
                <div className='breadcrumb p-10 text-white px-20'>
                    <h1 className="text-3xl font-bold mb-4">Sensor Data</h1>
                    <p className='text-sm'>Home/ Report/ Sensor Data</p>
                </div>

                <div className="space-y-4 pt-10 px-4 md:px-20">
                    <h1 className="text-3xl font-bold mb-4">Water Quality Index</h1>
                    <RealtimeChart />
                </div>

                <div className="space-y-4 pt-10 px-4 md:px-20">
                    <h1 className="text-3xl font-bold mb-4">Solid Pollutants</h1>
                    <PlasticWaterChart />
                </div>
            </main>
        </div>
    )
}

export default page