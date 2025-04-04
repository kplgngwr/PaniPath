'use client'

import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useSticky from '@/hooks/useSticky';

const menuItems = [
    { title: 'Home', href: '/' },
    {
        title: 'Wetland Authority Delhi',
        href: '/wetland-authority-delhi',
        submenu: [
            { title: 'Central', href: '/wetland-authority-delhi/central' },
            { title: 'New Delhi', href: '/wetland-authority-delhi/new-delhi' },
            { title: 'East', href: '/wetland-authority-delhi/east' },
            { title: 'West', href: '/wetland-authority-delhi/west' },
            { title: 'North', href: '/wetland-authority-delhi/north' },
            { title: 'North East', href: '/wetland-authority-delhi/north-east' },
            { title: 'North West', href: '/wetland-authority-delhi/north-west' },
            { title: 'South', href: '/wetland-authority-delhi/south' },
            { title: 'South East', href: '/wetland-authority-delhi/south-east' },
            { title: 'South West', href: '/wetland-authority-delhi/south-west' },
        ],
    },
    { title: 'Mapping', href: '/mapping' },
    { title: 'Report Water Body', href: '/report-water-body' },
    { title: 'Sensor Data', href: '/sensor-data' },
    { title: 'Upload Recent Image', href: '/upload-recent-image' },
    { title: 'Water Quality Map', href: '/water-quality-map' },
    { title: 'Vegetation Map', href: '/vegetation-map' },
];

const Navbar = () => {
    const isSticky = useSticky(150);
    const [openMenus, setOpenMenus] = useState<string[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (path: string) => {
        setOpenMenus(prev =>
            prev.includes(path) ? prev.filter(item => item !== path) : [...prev, path]
        );
    };

    const isMenuOpen = (path: string) => openMenus.includes(path);

    const closeAllMenus = () => {
        setOpenMenus([]);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeAllMenus();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderMenu = (items: any[], parentPath: string = '') => (
        <ul className="absolute bg-[#115589] min-w-40 mt-2 shadow-lg z-10 -ml-2">
            {items.map(item => {
                const currentPath = `${parentPath}/${item.title}`;
                return (
                    <li key={item.title} className="relative group">
                        {item.submenu ? (
                            <div>
                                <button
                                    onClick={() => toggleMenu(currentPath)}
                                    className="flex items-center hover:text-yellow-300 focus:outline-none"
                                >
                                    {item.title}
                                    <ChevronDown
                                        className={`ml-1 h-4 w-4 transition-transform ${isMenuOpen(currentPath) ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {isMenuOpen(currentPath) && <div className="relative">{renderMenu(item.submenu, currentPath)}</div>}
                            </div>
                        ) : (
                            <Link href={item.href} className="">
                                <span className="block hover:bg-blue-700 p-2 whitespace-nowrap text-left border-b border-white">{item.title}</span>
                            </Link>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header className="bg-blue-900 text-white">
            
            <div className="px-4 md:px-20 flex justify-between md:justify-end items-center">
                <button className="py-1 px-3 bg-green-500 text-black font-bold">
                    <Link href="/dashboard/home">Admin</Link>
                </button>
                <button className="py-1 px-3 bg-yellow-500 text-black font-bold">
                    <Link href="/login">Login</Link>
                </button>
                <p className="ml-2 text-md">English</p>
                <Button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            <div className="bg-white flex justify-between items-center px-4 md:px-20 py-4">
                <Link href={'/'} className='select-none'>
                    <div className="left flex justify-center items-center">
                        <img src="https://dpgs.delhi.gov.in/sites/default/files/logo/emblem-dark-logo_0_7.png" alt="National Emblem" />
                        <span className="text-black flex flex-col justify-center font-bold ml-4">
                            <span className="text-xl">Delhi Parks and Gardens Society</span>
                            <span>Government of NCT of Delhi</span>
                        </span>
                    </div>
                </Link>
                <div className="right hidden md:flex justify-center items-center">
                    <img src="https://dpgs.delhi.gov.in/sites/default/files/PAO/header-sublogos/lok-sabha-election1.jpg" alt="lok sabha election" width={100} />
                    <img src="https://dpgs.delhi.gov.in/sites/default/files/header-sublogos/india-flag-1.jpg" alt="india flag" width={100} />
                    <img src="https://dpgs.delhi.gov.in/sites/default/files/header-sublogos/amrit-mahotsav.jpg" alt="amrit mahotsav" width={100} />
                </div>
            </div>
            <nav
                className={`px-4 md:px-14 bg-[#084c9d] text-white transition-all ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}
                ref={dropdownRef}
            >
                <ul
                    className={`flex flex-col md:flex-row justify-between items-center flex-wrap px-4 space-x-4 md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'
                        } md:flex`}
                >
                    {menuItems.map(item => (
                        <li key={item.title} className="relative group hover:bg-[#005fa8] p-2">
                            {item.submenu ? (
                                <div>
                                    <button onClick={() => toggleMenu(item.title)} className="flex items-center focus:outline-none">
                                        <Link href={item.href}>{item.title}</Link>
                                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMenuOpen(item.title) ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isMenuOpen(item.title) && <div className="relative">{renderMenu(item.submenu, item.title)}</div>}
                                </div>
                            ) : (
                                <Link href={item.href}>
                                    <span className="">{item.title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
