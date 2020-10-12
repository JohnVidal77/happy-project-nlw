import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import MapMarker from "../../images/map-marker.svg";

import "./styles.css";

const pointerIcon = new Icon({
  iconUrl: MapMarker,
  iconRetinaUrl: MapMarker,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 100],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

function OrphanageMap() {
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

      <Map
        center={[-22.77799, -45.192997]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker position={[-22.77799, -45.192997]} icon={pointerIcon} />
      </Map>
    </div>
  );
}

export default OrphanageMap;
