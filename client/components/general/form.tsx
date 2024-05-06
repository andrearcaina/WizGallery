import { useState, useEffect } from 'react';

export default function Form({ onSubmit, allWorlds }: { onSubmit: (location: string | null | undefined) => void, allWorlds: string[] }) {
    const [world, setWorld] = useState('');
    const [allLocations, setLocations] = useState([]);
    const [selectedLocation, selectLocation] = useState('');

    useEffect(() => {
        if (world) {
            fetchLocations(world);
        } else {
            setLocations([]);
        }
    }, [world]);

    const fetchLocations = async (selectedWorld: string) => {
        try {
            const res = await fetch(`http://localhost:5000/api/locations?world=${selectedWorld}`, {
                method: 'GET'
            });
            const locations = await res.json();
            setLocations(locations);
        } catch (error) {
            console.error("Error fetching available locations from Flask API:", error);
        }
    };

    const handleSubmit = () => {
        onSubmit(selectedLocation);
    };

    return (
        <form action={handleSubmit} className="mt-4">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">World:</label>
                <select
                    value={world}
                    onChange={(e) => setWorld(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                >
                    <option value="" disabled>Select a world</option>
                    {allWorlds.map((world: string) => (
                        <option key={world} value={world}>{world}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Location:</label>
                <select
                    value={selectedLocation}
                    onChange={(e) => selectLocation(e.target.value)}
                    disabled={!world}
                    className="mt-1 p-2 border rounded-md w-full"
                >
                    <option value="" disabled={!world}>Select a location</option>
                    {allLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md active:bg-blue-800"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};