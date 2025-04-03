import React from 'react';
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface FencedDrawerProps {
    open: boolean;
    fence: any;
    onClose: () => void;
    onCoordinateClick: (lat: number, lng: number) => void;
}

const FencedDrawer: React.FC<FencedDrawerProps> = ({ open, fence, onClose, onCoordinateClick }) => {
    if (!fence) return null;

    const formatValue = (value: any) => {
        if (Array.isArray(value)) {
            return value.join(', ');
        } else if (typeof value === 'object' && value !== null) {
            return Object.entries(value)
                .map(([key, val]) => `${key}: ${val}`)
                .join(', ');
        } else if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No';
        }
        return value?.toString() || 'N/A';
    };

    return (
        <div
            className={cn(
                "fixed inset-y-0 right-0 z-30 w-96 transform transition-transform",
                {
                    "translate-x-0": open,
                    "translate-x-full": !open,
                },
                "bg-white shadow-lg p-4 overflow-y-auto"
            )}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{fence.name || 'Fence Details'}</h2>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                    &times;
                </button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='capitalize'>
                    {Object.entries(fence).map(([key, value]) => {
                        if (key === 'location') {
                            return (
                                <TableRow key={key}>
                                    <TableCell className="font-medium">{key}</TableCell>
                                    <TableCell>
                                        <button
                                            className="text-blue-500 underline"
                                            onClick={() => {
                                                // Convert string to array if needed
                                                let locationArray = fence.location;
                                                if (typeof locationArray === 'string') {
                                                    try {
                                                        locationArray = JSON.parse(locationArray);
                                                    } catch (e) {
                                                        console.error('Error parsing location:', e);
                                                        return;
                                                    }
                                                }

                                                // Ensure it's an array with at least 2 elements
                                                if (Array.isArray(locationArray) && locationArray.length >= 2) {
                                                    const [lng, lat] = locationArray;
                                                    onCoordinateClick(lat, lng);
                                                } else {
                                                    console.error('fence.location is not in the expected array format');
                                                }
                                            }}
                                        >
                                            View on Map
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        }
                        return (
                            <TableRow key={key}>
                                <TableCell className="font-medium">{key}</TableCell>
                                <TableCell>{formatValue(value)}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default FencedDrawer;
