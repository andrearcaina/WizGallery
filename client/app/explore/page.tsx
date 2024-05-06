'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Form, DisplayImages, Search } from '@/components';
import '../globals.css';

export default function Explore() {
    const [apiData, setApiData] = useState([]);
    const [Worlds, setWorlds] = useState([]);

    useEffect(() => {
        fetchWorlds();
    }, []);

    const fetchData = async (location: string) => {
        try {
            let url = "";
            if (location) {
                url = `http://localhost:5000/api/search?location=${location}`;
            } else {
                url = 'http://localhost:5000/api/data';
            }

            const res = await fetch(url, {
                method: 'GET'
            });
            const data = await res.json();
            setApiData(data);
        } catch (error) {
            console.error("Error fetching data from Flask API:", error);
        }
    };

    const fetchWorlds = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/worlds', {
                method: 'GET'
            });
            const worlds = await res.json();
            setWorlds(worlds);
        } catch (error) {
            console.error("Error fetching data from Flask API:", error);
        }
    };

    const handleFormSubmit = (location: string | null | undefined) => {
        if (!location) {
            return;
        }
        
        fetchData(location);
    };

    return (
        <main className="min-h-[80vh] bg-gray-200">
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Explore!</h1>
                
                <div className="flex justify-center items-center h-full">
                    <Form onSubmit={handleFormSubmit} allWorlds={Worlds} />
                </div>
                    
                <div className="flex flex-wrap justify-center">
                    <DisplayImages Data={apiData} />
                </div>
            </div>
        </main>
    );
};
