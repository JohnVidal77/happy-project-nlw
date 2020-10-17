import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

import MapMarker from "../../images/map-marker.svg";
import HappyMapIcon from "../../utils/map-icon";

import "./styles.css";
import api from "../../services/api";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanageMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("/orphanages").then((res) => {
      setOrphanages(res.data);
    });
  }, [orphanages]);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Happy Brand" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        {/* TODO: transform in component (?) */}
        <footer>
          <strong>Sao Paulo</strong>
          <span>Sao Paulo</span>
        </footer>
      </aside>

      <Link to="/criar-orfanato" className="create-orphanage">
        <FiPlus size="2rem" color="#fff" />
      </Link>

      <Map center={[-22.77799, -45.192997]} zoom={15} style={{ width: "100%", height: "100%" }}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages &&
          orphanages.map((orphanage) => {
            return (
              <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={HappyMapIcon}>
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                  {orphanage.name}
                  <Link to={`/orfanato/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
}

export default OrphanageMap;
