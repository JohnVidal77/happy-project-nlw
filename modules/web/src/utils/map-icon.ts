import { icon } from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const HappyMapIcon = icon({
  iconUrl: mapMarkerImg,
  iconRetinaUrl: mapMarkerImg,
  iconAnchor: [29, 68],
  iconSize: [58, 68],
  popupAnchor: [170, 2],
});

export default HappyMapIcon;
