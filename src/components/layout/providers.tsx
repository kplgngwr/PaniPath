'use client';

import React, { useEffect, useState } from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { Loader2 } from 'lucide-react';

// Example facts about water bodies in India
const waterFacts = [
  "The Ganges River, flowing through India, is one of the most sacred rivers in the world.",
  "India is home to the largest number of lakes in the world, with more than 55,000 lakes.",
  "Chilika Lake in Odisha is Asia's largest brackish water lagoon.",
  "Wular Lake in Jammu and Kashmir is one of the largest freshwater lakes in Asia.",
  "Loktak Lake in Manipur is known for its phumdis, or floating islands."
];

function getRandomFact() {
  return waterFacts[Math.floor(Math.random() * waterFacts.length)];
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    // Set a random fact when the component mounts
    setFact(getRandomFact());

    // Simulate a loading state
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold mb-4 flex justify-center items-center">
            <Loader2 className='animate-spin'/>
          </p>
          {fact && <p className="text-lg text-gray-700">{fact}</p>}
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
