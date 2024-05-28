"use client"
// pages/index.js

import { useState } from "react";
export const planetsData = [
    {
        name: "Merkur",
        size: "Malá",
        distanceFromEarth: "57,9 mil. km",
        image: "/images/mercury.jpg",
    },
    {
        name: "Venuše",
        size: "Střední",
        distanceFromEarth: "108,2 mil. km",
        image: "/images/venus.jpg",
    },
    {
        name: "Země",
        size: "Střední",
        distanceFromEarth: "0 km",
        image: "/images/earth.jpg",
    },

];

export default function Home() {
    const [selectedPlanet, setSelectedPlanet] = useState(planetsData[0]);

    const handlePlanetChange = (event) => {
        const selectedPlanetName = event.target.value;
        const planet = planetsData.find((planet) => planet.name === selectedPlanetName);
        setSelectedPlanet(planet);
    };




    return (
        <div>
            <h1>Informace o planetě {selectedPlanet.name}</h1>
            <div>
                <img src={selectedPlanet.image} alt={selectedPlanet.name} style={{ width: "200px", height: "200px" }} />
            </div>
            <div>
                <label htmlFor="planet-select">Vyberte planetu:</label>
                <select id="planet-select" onChange={handlePlanetChange} value={selectedPlanet.name}>
                    {planetsData.map((planet) => (
                        <option key={planet.name} value={planet.name}>
                            {planet.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p>Velikost: {selectedPlanet.size}</p>
                <p>Vzdálenost od Země: {selectedPlanet.distanceFromEarth}</p>
            </div>
        </div>
    );
}
