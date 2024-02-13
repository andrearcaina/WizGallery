'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Form, Search } from '@/components';
import '../globals.css';

export default function Explore() {
    const [apiData, setApiData] = useState([]);
    const [Worlds, setWorlds] = useState([]);

    useEffect(() => {
        fetchData();
        fetchWorlds();
    }, []);

    const fetchData = async (location = null) => {
        try {
            let url = "";
            if (location) {
                console.log(`Fetching data for ${location}...`);
                url = `http://localhost:5000/api/search?location=${location}`;
            } else {
                console.log("Fetching all data...");
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

    const handleFormSubmit = ({ world, location }) => {
        console.log(`World: ${world}, Location: ${location}`);
        fetchData(location);
    };

    console.log("API Data:", apiData);

    return (
        <main>
            <div className="bg-gray-200 p-8">
                <h1 className="text-2xl font-bold mb-4">Explore!</h1>
                <Form onSubmit={handleFormSubmit} allWorlds={Worlds} />
                
                {apiData.info && apiData.img_data && apiData.info.map((item, index) => (
                    <div key={index}>
                        <p>Account: {item[1]}</p>
                        <p>World: {item[2]}</p>
                        <p>File Name: {item[3]}</p>
                        <p>Date: {item[4]}</p>
                        <Image
                            src={`data:image/jpeg;base64,${apiData.img_data[index]}`}
                            width={500}
                            height={500}
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
                
                {!apiData.info && <p>Testing API: {JSON.stringify(apiData, null, 2)}</p>}
                {!apiData.info && <p>No data available: submit a form</p>}
                {!apiData.img_data && <p>No image data available: submit a form</p>}
            </div>
        </main>
    );
};
