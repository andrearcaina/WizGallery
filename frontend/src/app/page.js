'use client'
import { useState, useEffect } from 'react';

export default function App() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/data', {
                    method: 'GET'
                });
                const data = await res.json();
                setApiData(data);
            } catch (error) {
                console.error("Error fetching data from Flask API:", error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <>
            <div>
                <h1>Next.js Flask app</h1>
                <pre>API CALL: {JSON.stringify(apiData, null, 2)}</pre>
            </div>
        </>
    );
}