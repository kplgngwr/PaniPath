'use client'

import { Overview } from '@/components/overview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    BarChart2,
    Monitor,
    Settings,
    Cloud,
    Activity,
    Leaf,
    DollarSign,
    Briefcase
} from 'lucide-react';
import React from 'react';

const cardData = [
    {
        title: 'Total Water Bodies',
        value: '1,012',
        icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Monitored Water Bodies',
        value: '750',
        icon: <Monitor className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Under Maintenance',
        value: '12',
        icon: <Settings className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'High Pollution Areas',
        value: '432',
        icon: <Cloud className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Potential Diseases',
        value: '175',
        icon: <Activity className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Wildlife Sightings',
        value: '68',
        icon: <Leaf className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Near Agricultural Land',
        value: '81',
        icon: <Briefcase className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Total Funding',
        value: '₹30,000',
        icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
    }
];

const Page = () => {

    return (
        <div className="w-full mb-20">
            <main className="bg-white">
                <div className="space-y-4 pt-10 px-4 md:px-20">
                    <h1 className="text-3xl font-bold mb-4">Monitored Data</h1>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {cardData.slice(0, 4).map((card, index) => (
                            <Card key={index}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {card.title}
                                    </CardTitle>
                                    {card.icon}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{card.value}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {cardData.slice(4).map((card, index) => (
                            <Card key={index}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {card.title}
                                    </CardTitle>
                                    {card.icon}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{card.value}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div>
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-3">
                                <Overview />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
