'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DisplayImages } from '@/components';

export default function Journey() {
    const [Journey, setJourney] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        fetchJourneyData();
    }, [pageNum]);

    const fetchJourneyData = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/journey?page=${pageNum}`, {
                method: 'GET'
            });
            const data = await res.json();
            setJourney(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data from Flask API:", error);
            setLoading(false);
        }
    };

    const nextPage = () => {
        setLoading(true);
        setPageNum(pageNum + 1);
    };

    const prevPage = () => {
        if (pageNum > 1) {
            setLoading(true);
            setPageNum(pageNum - 1);
        }
    };

    return (
        <main className="bg-gray-200">
            {loading ? ( 
                <div className="flex items-center justify-center h-[85vh]">
                    <p className="text-2xl">Loading...</p>
                </div>
            ) : (
                <div className="bg-gray-200 p-8 flex flex-wrap justify-center shadow-xl">
                    <h1 className="text-center text-2xl font-bold mb-4 w-full">The Journey</h1>
                    
                    <div className="w-full flex justify-center mt-4">
                        <button onClick={prevPage} className="px-4 py-2 bg-blue-500 text-white mr-4 disabled:opacity-50 rounded-md" disabled={pageNum === 1}>Previous</button>
                        <button onClick={nextPage} className="px-4 py-2 bg-blue-500 text-white disabled:opacity-50 rounded-md"disabled={pageNum === 12}>Next</button>
                    </div>

                    <DisplayImages Data={Journey} />
                </div>
            )}
        </main>
    );
};