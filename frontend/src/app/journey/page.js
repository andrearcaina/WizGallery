'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Journey() {
    const [Journey, setJourney] = useState([]);

    useEffect(() => {
        fetchJourneyData();
    }, []);

    const fetchJourneyData = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/journey', {
                method: 'GET'
            });
            const data = await res.json();
            setJourney(data);
        } catch (error) {
            console.error("Error fetching data from Flask API:", error);
        }
    };

    console.log("data: ", Journey);
    
    return (
        <main>
            <div className="bg-gray-200 p-8 flex flex-wrap justify-center shadow-xl">
                <h1 className="text-2xl font-bold mb-4 w-full">The Journey</h1>
                
                {Journey.dates && Journey.img_data && Journey.img_data.map((img, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
                        <div className="border border-gray-400 shadow-md p-2">
                            <Image
                                src={`data:image/jpeg;base64,${img}`}
                                width={500}
                                height={500}
                                alt={`Image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'cover top'
                                }}
                            />
                        </div>
                        <p className="mt-2 text-center">{new Date(Journey.dates[index]).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};