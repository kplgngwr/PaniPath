'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    BarChart2,
    Monitor,
    Settings,
    Cloud,
} from 'lucide-react';
import { Wqi } from './WQI';

const cardData = [
    {
        title: 'Total Water Bodies',
        value: '54',
        icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Monitored Water Bodies',
        value: '5',
        icon: <Monitor className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Under Maintenance',
        value: '3',
        icon: <Settings className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'High Pollution Areas',
        value: '2',
        icon: <Cloud className="h-4 w-4 text-muted-foreground" />
    }
];

type Detail = {
    wetlandName: string;
    coordinates: string;
    village: string;
    wetlandType: string;
    wetlandSubType: string;
    areaInHa: number;
    khasraNo: string;
    regulatedWetland: string;
    imageLink: string;
};

type District = {
    name: string;
    lastUpdatedAt: string;
    nextUpdateAt: string;
    details: Detail[];
};

const districts: District[] = [
    {
        name: 'DDA',
        lastUpdatedAt: '15 July 2024',
        nextUpdateAt: '05 Aug 2024',
        details: [
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 4',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Delhi Village',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Delhi Water Body 2',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 3',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Delhi Village',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
            {
                wetlandName: 'Ghazipur F/75(5)',
                coordinates: '77°19\'14.20"E 28°38\'6.20"N',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Artificial',
                areaInHa: 0.00114,
                khasraNo: '(d)465(0-10)',
                regulatedWetland: 'No',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Ghazipur Pond A',
                coordinates: '77°19\'13.18"E 28°38\'5.19"N',
                village: 'Ghazipur',
                wetlandType: 'Pond',
                wetlandSubType: 'Natural',
                areaInHa: 0.00230,
                khasraNo: '(d)466(0-11)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1480505912-yamuna926-getty.jpg'
            },
            {
                wetlandName: 'Ghazipur Lake',
                coordinates: '77°19\'15.17"E 28°38\'7.18"N',
                village: 'Ghazipur',
                wetlandType: 'Lake',
                wetlandSubType: 'Artificial',
                areaInHa: 1.5,
                khasraNo: '(d)467(0-12)',
                regulatedWetland: 'No',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'Delhi Water Body 1',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                village: 'Delhi Village',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                imageLink: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ekke5q34alfi0a3470r2srvu61-20180805011122.Medi.jpeg'
            },
        ],
    },
    {
        name: 'BDO',
        lastUpdatedAt: '02 Aug 2024',
        nextUpdateAt: '15 Aug 2024',
        details: [
            {
                wetlandName: 'Yamuna Floodplain',
                coordinates: '28° 37\' 47.439" N 77° 18\' 45.070" E',
                village: 'Yamuna Bank',
                wetlandType: 'Riverine',
                wetlandSubType: 'Natural',
                areaInHa: 50.0,
                khasraNo: '(a)123, 456 (45-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://media.assettype.com/TNIE/import/2023/7/1/original/Najafgarh.jpg'
            },
            {
                wetlandName: 'Yamuna Wetland A',
                coordinates: '28° 36\' 35.00" N 77° 17\' 50.00" E',
                village: 'Yamuna Village',
                wetlandType: 'Riverine',
                wetlandSubType: 'Artificial',
                areaInHa: 40.0,
                khasraNo: '(b)101, 789 (35-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.theweekendleader.com/admin/upload/30_11_2021_10_46_42_delhi-wet-land.jpg'
            },
            {
                wetlandName: 'Random Wetland 1',
                coordinates: '28° 36\' 35.00" N 77° 17\' 50.00" E',
                village: 'Random Village',
                wetlandType: 'Riverine',
                wetlandSubType: 'Artificial',
                areaInHa: 40.0,
                khasraNo: '(b)101, 789 (35-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.theweekendleader.com/admin/upload/30_11_2021_10_46_42_delhi-wet-land.jpg'
            }
        ]
    },
    {
        name: 'MCD',
        lastUpdatedAt: '18 Aug 2024',
        nextUpdateAt: '20 Aug 2024',
        details: [
            {
                wetlandName: 'Forest Area A',
                coordinates: '28° 36\' 35.00" N 77° 17\' 50.00" E',
                village: 'Forest Village',
                wetlandType: 'Forest',
                wetlandSubType: 'Natural',
                areaInHa: 100.0,
                khasraNo: '(b)789, 101 (55-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://indianexpress.com/wp-content/uploads/2016/05/yamuna.jpg'
            },
            {
                wetlandName: 'North Forest Wetland',
                coordinates: '28° 35\' 30.00" N 77° 16\' 40.00" E',
                village: 'Forest Area',
                wetlandType: 'Forest',
                wetlandSubType: 'Natural',
                areaInHa: 80.0,
                khasraNo: '(c)555, 789 (45-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.theweekendleader.com/admin/upload/30_11_2021_10_46_42_delhi-wet-land.jpg'
            },
            {
                wetlandName: 'Random Wetland 2',
                coordinates: '28° 35\' 30.00" N 77° 16\' 40.00" E',
                village: 'Random Area',
                wetlandType: 'Forest',
                wetlandSubType: 'Natural',
                areaInHa: 80.0,
                khasraNo: '(c)555, 789 (45-0)',
                regulatedWetland: 'Yes',
                imageLink: 'https://www.theweekendleader.com/admin/upload/30_11_2021_10_46_42_delhi-wet-land.jpg'
            }
        ]
    },
];


type DistrictDialogProps = {
    district: District;
};

const DistrictDialog: React.FC<DistrictDialogProps> = ({ district }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant={'outline'}>View</Button>
        </DialogTrigger>
        <DialogContent className='w-[80vw] max-w-none max-h-[80vh] overflow-auto'>
            <DialogHeader>
                <DialogTitle>{district.name} Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 p-4 overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S. No.</TableHead>
                            <TableHead>Wetland Name</TableHead>
                            <TableHead>Geographical Coordinates</TableHead>
                            <TableHead>Village</TableHead>
                            <TableHead>Wetlands Type</TableHead>
                            <TableHead>Wetlands Sub-Type</TableHead>
                            <TableHead>Area in (ha)</TableHead>
                            <TableHead>Khasra No./Areas</TableHead>
                            <TableHead>Whether falls within category of regulated wetlands</TableHead>
                            <TableHead>Recent Image</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {district.details.map((detail,index) => (
                            <TableRow key={index}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{detail.wetlandName}</TableCell>
                                <TableCell>
                                    <Link href={`https://www.google.com/maps/place/${detail.coordinates}`} target='_blank'>
                                        {detail.coordinates}
                                    </Link>
                                </TableCell>
                                <TableCell>{detail.village}</TableCell>
                                <TableCell>{detail.wetlandType}</TableCell>
                                <TableCell>{detail.wetlandSubType}</TableCell>
                                <TableCell>{detail.areaInHa}</TableCell>
                                <TableCell>{detail.khasraNo}</TableCell>
                                <TableCell>{detail.regulatedWetland}</TableCell>
                                <TableCell>
                                    <Link href={detail.imageLink} target='_blank' className='text-blue-700 underline'>
                                        Link
                                    </Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </DialogContent>
    </Dialog>
);

const Page = () => (
    <div className="w-full">
        <main className="bg-white">
            <div className='breadcrumb p-10 text-white px-20'>
                <h1 className="text-3xl font-bold mb-4">East</h1>
                <p className='text-sm'>Home/ Report/ East</p>
            </div>

            <div className="space-y-4 pt-10 px-4 md:px-20">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
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
                <div>
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-3">
                            <Wqi />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-4 p-20">
                <ul>
                    {districts.map((district, index) => (
                        <li
                            key={index}
                            className={`flex justify-between items-center p-3 ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-100'}`}
                        >
                            <div>
                                <p className='font-bold text-sm'>{district.name}</p>
                                <p className='text-sm flex justify-center items-center'>
                                    <span>Last Updated : {district.lastUpdatedAt}</span>
                                    <span className='ml-10'>Next Update : {district.nextUpdateAt}</span>
                                </p>
                            </div>
                            <DistrictDialog district={district} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    </div>
);

export default Page;
