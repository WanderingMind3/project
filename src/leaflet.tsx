import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

interface Country {
  name: string;
  latlng: [number, number];
}

function Map() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country: any) => ({
          name: country.name.common,
          latlng: [country.latlng[0], country.latlng[1]]
        }));
        setCountries(countries);
      });
  }, []);

  return (
    <div id="map" className='h-screen'>

    <MapContainer className="h-screen overflow-visible"center={[0, 0]} zoom={2}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker key={index} position={country.latlng}>
          <Popup>{country.name}</Popup>
        </Marker>
      ))}
    </MapContainer>

    </div>
  );
}

export default Map;