'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase';
import Link from 'next/link';

type WaterReport = {
  id: string;
  coordinates: string;
  email: string;
  feedback: string;
  imageUrl?: string;
  mobile: string;
  name: string;
  timestamp: { seconds: number; nanoseconds: number };
};

type RecentImage = {
  id: string;
  area: string;
  coordinates: string;
  district: string;
  isRegulated: boolean;
  khasraNo: string;
  recentImage?: string;
  timestamp: { seconds: number; nanoseconds: number };
  village: string;
  wetlandName: string;
  wetlandSubType: string;
  wetlandType: string;
};

const Page: React.FC = () => {
  const [waterReports, setWaterReports] = useState<WaterReport[]>([]);
  const [recentImages, setRecentImages] = useState<RecentImage[]>([]);
  const [userToken, setUserToken] = useState<string | null>(null); // Store the token here
  const userEmail = "developer.royad@gmail.com"; // Replace with dynamic email if needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch waterReports collection
        const waterReportsSnapshot = await getDocs(collection(db, 'waterReports'));
        const waterReportsData = waterReportsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as WaterReport[];
        setWaterReports(waterReportsData);

        // Fetch recentImages collection
        const recentImagesSnapshot = await getDocs(collection(db, 'recentImages'));
        const recentImagesData = recentImagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as RecentImage[];
        setRecentImages(recentImagesData);

        // Fetch token using email
        const response = await fetch('/api/get-token-from-email', {
          method: 'POST',
          body: JSON.stringify({ email: userEmail }),
          headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        console.log(result);

        if (result.status) {
          setUserToken(result.token); // Set the token here
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-8 min-h-screen mx-4 md:mx-40 my-10">
      <h1 className="text-4xl font-bold text-center text-blue-600">Water Bodies Report/Images</h1>

      {/* Water Reports Table */}
      <div className="mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Water Reports</h2>
      {waterReports.length > 0 ? (
        <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg border border-gray-200">
          <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-4">Name</th>
            <th className="p-4">Coordinates</th>
            <th className="p-4">Email</th>
            <th className="p-4">Feedback</th>
            <th className="p-4">Mobile</th>
            <th className="p-4">Timestamp</th>
            <th className="p-4">Image</th>
            <th className="p-4">View More</th>
          </tr>
          </thead>
          <tbody>
          {waterReports.map((report) => (
            <tr key={report.id} className="border-b hover:bg-gray-50">
            <td className="p-4">{report.name}</td>
            <td className="p-4">{report.coordinates}</td>
            <td className="p-4">{report.email}</td>
            <td className="p-4">{report.feedback}</td>
            <td className="p-4">{report.mobile}</td>
            <td className="p-4">
              {new Date(report.timestamp.seconds * 1000).toLocaleString()}
            </td>
            <td className="p-4 text-blue-500 underline">
              {report.imageUrl && (
              <a href={report.imageUrl} target="_blank" rel="noopener noreferrer">
                Click to View
              </a>
              )}
            </td>
            {userToken && (
              <td>
              <Link href={`/dashboard/home/${userToken}`}>
                View Details
              </Link>
              </td>
            )}
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p className="text-gray-600">No water reports available.</p>
      )}
      </div>

      {/* Recent Images Table */}
      <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Images</h2>
      {recentImages.length > 0 ? (
        <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg border border-gray-200">
          <thead>
          <tr className="bg-green-100 text-left">
            <th className="p-4">Wetland Name</th>
            <th className="p-4">Village</th>
            <th className="p-4">District</th>
            <th className="p-4">Coordinates</th>
            <th className="p-4">Khasra No</th>
            <th className="p-4">Wetland Type</th>
            <th className="p-4">Is Regulated</th>
            <th className="p-4">Timestamp</th>
            <th className="p-4">Image</th>
          </tr>
          </thead>
          <tbody>
          {recentImages.map((image) => (
            <tr key={image.id} className="border-b hover:bg-gray-50">
            <td className="p-4">{image.wetlandName}</td>
            <td className="p-4">{image.village}</td>
            <td className="p-4">{image.district}</td>
            <td className="p-4">{image.coordinates}</td>
            <td className="p-4">{image.khasraNo}</td>
            <td className="p-4">{image.wetlandType}</td>
            <td className="p-4">{image.isRegulated ? 'Yes' : 'No'}</td>
            <td className="p-4">
              {new Date(image.timestamp.seconds * 1000).toLocaleString()}
            </td>
            <td className="p-4 text-blue-500 underline">
              {image.recentImage && (
              <a href={image.recentImage} target="_blank" rel="noopener noreferrer">
                Click to View
              </a>
              )}
            </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p className="text-gray-600">No recent images available.</p>
      )}
      </div>
    </div>
  );
};

export default Page;
