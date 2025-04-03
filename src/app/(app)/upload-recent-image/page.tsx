import React from 'react'
import WetlandUploadForm from './WetlandUploadForm'

const page = () => {
    return (
        <div className="w-full mb-20">
            <main className="bg-white">
                <div className='breadcrumb p-10 text-white px-20'>
                    <h1 className="text-3xl font-bold mb-4">Upload Recent Image</h1>
                    <p className='text-sm'>Home/ Report/ Upload Recent Image</p>
                </div>

                <div className="space-y-4 pt-10 px-4 md:px-20">
                        <WetlandUploadForm />
                </div>
            </main>
        </div>
    )
}

export default page