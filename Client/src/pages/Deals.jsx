import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import Base_URL from "../axios";
import Dealer from "../components/Dealer";
import { Store } from "../store";
import mapboxgl from "mapbox-gl";

export const geojson = {
  type: "FeatureCollection",
  features: [
    {
      id: '1',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.88001, 22.72806],
      },
      properties: {
        title: "Rohan Kumar",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '2',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.86136272167683,22.716531960298408],
      },
      properties: {
        title: "Sahil Dupia",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '3',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.84188583731287,22.72128249261426],
      },
      properties: {
        title: "Mohd. Afzal",
        description: "Scrap Dealer from Khathari",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '4',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.87875366931333,22.681428753020224],
      },
      properties: {
        title: "Sohan Rawat",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '5',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.8798428410716, 22.674013711901992],
      },
      properties: {
        title: "Mohan",
        description: "Scrap Dealer from Badkal Mod",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
  ],
};

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2htbmlmaWMiLCJhIjoiY2xmdHg4MmdnMDVmcTNlcDBmY2I0dWhoNCJ9.45MjXuHVJF_F8zmlWTZkFg";

const Deals = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const mapContainerRef = useRef(null);

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    let raw_data = [];
    let center = [];
    const getData = async () => {
      try {
        const { data } = await axios.post(`${Base_URL}/map/`, {
          location: userInfo.address,
        });
        setMapData([...mapData, data]);
        center = [...data];
        raw_data = [...raw_data, data];

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [75.88001, 22.72806],
          zoom: 2,
        });

        map.on("style.load", () => {
          map.setFog({}); // Set the default atmosphere style
        });

        // Add geolocate control to the map.
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true,
          })
        );

        for (const feature of geojson.features) {
          // create a HTML element for each feature
          const el = document.createElement("div");
          el.className = "marker";

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);

          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
            )
            .addTo(map);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="box flex flex-col h-full">
      <h1 className='text-center m-9 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Make a Deal </h1>
      <div className="relative w-full h-[600px]">
        <div className="map-container" ref={mapContainerRef} id="map" />
      </div>
      {geojson.features.map((geo) => (
        
        <Dealer
          key={geo.id}
          id={geo.id}
          name={geo.properties.title}
          phone={geo.extraInfo.phone}
          address={geo.extraInfo.address}
          coord={geo.geometry.coordinates}
          bio={geo.properties.description}
        />
      ))}
    </div>
  );
};

export default Deals;
