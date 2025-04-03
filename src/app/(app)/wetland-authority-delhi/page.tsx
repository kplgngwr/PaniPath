'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    const districts = [
        { name: 'East', link: '/wetland-authority-delhi/east' },
        { name: 'West', link: '/wetland-authority-delhi/west' },
        { name: 'North', link: '/wetland-authority-delhi/north' },
        { name: 'South', link: '/wetland-authority-delhi/south' },
        { name: 'Central', link: '/wetland-authority-delhi/central' },
        { name: 'North-East', link: '/wetland-authority-delhi/north-east' },
        { name: 'North-West', link: '/wetland-authority-delhi/north-west' },
        { name: 'South-East', link: '/wetland-authority-delhi/south-east' },
        { name: 'South-West', link: '/wetland-authority-delhi/south-west' },
        { name: 'New Delhi', link: '/wetland-authority-delhi/new-delhi' },
        // Add more districts with their corresponding links here
    ];

    return (
        <div className="w-full">
            <main className="bg-white">
                <div className='breadcrumb p-10 text-white px-20'>
                    <h1 className="text-3xl font-bold mb-4">District Wise/ Agency Wise List</h1>
                    <p className='text-sm'>Home/ District Wise/ Agency Wise List</p>
                </div>

                <div className="space-y-4 p-20">
                    <ul>
                        {districts.map((district, index) => (
                            <li
                                key={index}
                                className={`flex justify-between items-center p-3 ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-100'}`}
                            >
                                <p className='font-bold text-sm'>{district.name}</p>
                                <Button variant={'outline'}>
                                    <Link href={district.link}>
                                        View
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default Page;
