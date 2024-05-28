function PlanetInfo() {
    const { planet } = useContext(PlanetContext);

    if (!planet) {
        return <p>Vyberte planetu</p>;
    }

    return (
        <div>
            <h2>{planet.name}</h2>
            <p>Velikost: {planet.size}</p>
            <p>Vzdálenost od Země: {planet.distance}</p>
        </div>
    );
}
