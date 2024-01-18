'use client'
import { useState, useEffect } from 'react';
import Form from './components/form';
import './globals.css';

export default function App() {
    const [apiData, setApiData] = useState([]);
    const [Worlds, setWorlds] = useState([]);

    useEffect(() => {
        fetchData();
        fetchWorlds(); // Fetch available worlds on component mount
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

    return (
        <>
            <div className="bg-gray-200 p-8">
                <h1 className="text-2xl font-bold mb-4">Wiz Gallery</h1>
                <Form onSubmit={handleFormSubmit} allWorlds={Worlds} />
                <pre className="mt-4">API CALL: {JSON.stringify(apiData, null, 2)}</pre>
            </div>
        </>
    );
}
