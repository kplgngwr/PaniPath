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
        value: '166',
        icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Monitored Water Bodies',
        value: '13',
        icon: <Monitor className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'Under Maintenance',
        value: '3',
        icon: <Settings className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: 'High Pollution Areas',
        value: '42',
        icon: <Cloud className="h-4 w-4 text-muted-foreground" />
    }
];

type Detail = {
    wetlandName: string;
    coordinates: string;
    district: string;
    village: string;
    wetlandType: string;
    wetlandSubType: string;
    areaInHa: number;
    khasraNo: string;
    regulatedWetland: string;
    landOwnership: string;
    imageLink:string;
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
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'BDO',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Ghazipur F/74(4)',
                coordinates: '77°19\'14.17"E 28°38\'6.18"N',
                district: 'East',
                village: 'Ghazipur',
                wetlandType: 'Inland',
                wetlandSubType: 'Natural',
                areaInHa: 0.00113,
                khasraNo: '(d)464(0-09)',
                regulatedWetland: 'Yes',
                landOwnership: 'ASI',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'MCD',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'Forest Area A',
                coordinates: '28° 36\' 35.00" N 77° 17\' 50.00" E',
                district: 'North',
                village: 'Forest Village',
                wetlandType: 'Forest',
                wetlandSubType: 'Natural',
                areaInHa: 100.0,
                khasraNo: '(b)789, 101 (55-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'Forest Department',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'Forest Area A',
                coordinates: '28° 36\' 35.00" N 77° 17\' 50.00" E',
                district: 'North',
                village: 'Forest Village',
                wetlandType: 'Forest',
                wetlandSubType: 'Natural',
                areaInHa: 100.0,
                khasraNo: '(b)789, 101 (55-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'Forest Department',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'DJB',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'SDMC Wetland A',
                coordinates: '28° 39\' 40.00" N 77° 19\' 30.00" E',
                district: 'North',
                village: 'SDMC Area',
                wetlandType: 'Urban',
                wetlandSubType: 'Artificial',
                areaInHa: 20.0,
                khasraNo: '(c)456, 789 (20-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'SDMC',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'DUSIB',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'SDMC Wetland A',
                coordinates: '28° 39\' 40.00" N 77° 19\' 30.00" E',
                district: 'North',
                village: 'SDMC Area',
                wetlandType: 'Urban',
                wetlandSubType: 'Artificial',
                areaInHa: 20.0,
                khasraNo: '(c)456, 789 (20-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'SDMC',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'PWD',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'SDMC Wetland A',
                coordinates: '28° 39\' 40.00" N 77° 19\' 30.00" E',
                district: 'North',
                village: 'SDMC Area',
                wetlandType: 'Urban',
                wetlandSubType: 'Artificial',
                areaInHa: 20.0,
                khasraNo: '(c)456, 789 (20-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'SDMC',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
    },
    {
        name: 'Forest',
        lastUpdatedAt: '22 Mar 2024',
        nextUpdateAt: '10 Sept 2024',
        details: [
            {
                wetlandName: 'SDMC Wetland A',
                coordinates: '28° 39\' 40.00" N 77° 19\' 30.00" E',
                district: 'North',
                village: 'SDMC Area',
                wetlandType: 'Urban',
                wetlandSubType: 'Artificial',
                areaInHa: 20.0,
                khasraNo: '(c)456, 789 (20-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'SDMC',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
            {
                wetlandName: 'SDMC Wetland A',
                coordinates: '28° 39\' 40.00" N 77° 19\' 30.00" E',
                district: 'North',
                village: 'SDMC Area',
                wetlandType: 'Urban',
                wetlandSubType: 'Artificial',
                areaInHa: 20.0,
                khasraNo: '(c)456, 789 (20-0)',
                regulatedWetland: 'Yes',
                landOwnership: 'SDMC',
                imageLink:'https://res.cloudinary.com/duqeanwph/image/upload/v1725467192/ph9dhzxlibrsxibsfks5.png'
            },
        ],
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
                            <TableHead>District(s)</TableHead>
                            <TableHead>Village</TableHead>
                            <TableHead>Wetlands Type</TableHead>
                            <TableHead>Wetlands Sub-Type</TableHead>
                            <TableHead>Area in (ha)</TableHead>
                            <TableHead>Khasra No./Areas</TableHead>
                            <TableHead>Whether falls within category of regulated wetlands</TableHead>
                            <TableHead>Land ownerships</TableHead>
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
                                <TableCell>{detail.landOwnership}</TableCell>
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
                <h1 className="text-3xl font-bold mb-4">North West</h1>
                <p className='text-sm'>Home/ Report/ North West</p>
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
