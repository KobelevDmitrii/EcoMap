import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "../../node_modules/leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import '../index.css';
import '../../node_modules/leaflet/dist/leaflet.css';

export default class MapDisplay extends Component {
state = {
    lat: 61.7849,
    lng: 34.3469,
    zoom: 13,
}

render() {
    const position = [this.state.lat, this.state.lng]
    return (
        <MapContainer center={position} zoom={this.state.zoom} className="map">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>
                  Петрозаводск
              </Popup>
            </Marker>
        </MapContainer>
    )
  }
}