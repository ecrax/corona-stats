import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { getData } from "utils/getData";
import moment from "moment";

export const Map: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      setData(await getData());
    }

    loadData();
  }, []);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={true}
      className={styles.mapContainer}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/ecrax/ckqgt7jrs002s18qllm0afqag/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {data?.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Tooltip>
            <div className={styles.countryName}>
              <img
                src={country.countryInfo.flag}
                alt={`${country.country}'s Flag`}
                width={30}
              ></img>{" "}
              <b>{country.country}</b>
            </div>

            <p>
              Confirmed Cases:{" "}
              {new Intl.NumberFormat("en-US").format(country.cases)}
            </p>
            <p>
              Deaths: {new Intl.NumberFormat("en-US").format(country.deaths)}
            </p>
            <p>
              Recovered:{" "}
              {new Intl.NumberFormat("en-US").format(country.recovered)}
            </p>
            <p>Last Update: {moment(country.updated).fromNow()}</p>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};
