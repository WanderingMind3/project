import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";

interface Country {
  name: string;
  latlng: [number, number];
  active: number;
  deaths: number;
  recoverd: number;
}
export const Map: React.FC<any> = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  function getMyData() {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((countri: any) => ({
          name: countri.country,
          latlng: [countri.countryInfo.lat, countri.countryInfo.long],
          active: countri.active,
          deaths: countri.deaths,
          recoverd: countri.recovered,
        }));
        setCountries(countries);
      });
  }

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countries.map((country, index) => (
          <Marker key={index} position={country.latlng}>
            <Popup>Name - {country.name} Active - {country.active} Deaths - {country.deaths} Recovered -{country.recoverd}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
