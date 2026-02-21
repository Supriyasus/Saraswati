"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

/* FIX MARKER ICON */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

/* LOCATIONS */
const allLocations = [
  { city:"Delhi", name:"Magic Auto Private Ltd", address:"Ghazipur Village", lat:28.6139, lng:77.209 },
  { city:"Delhi", name:"Dinco 4 Wheels LLP", address:"Vasant Kunj", lat:28.5562, lng:77.1 },
  { city:"Mumbai", name:"AutoHub Mumbai", address:"Andheri East", lat:19.1136, lng:72.8697 },
  { city:"Lucknow", name:"Royal Motors", address:"Hazratganj", lat:26.8467, lng:80.9462 }
];

const cities = [...new Set(allLocations.map(l => l.city))];


/* COMPONENT THAT MOVES MAP */
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, 14, { animate:true });
  return null;
}


/* MAIN COMPONENT */
export default function Locations() {

  const [city, setCity] = useState(cities[0]);
  const [visitType, setVisitType] = useState("Dealer Showroom");

  const filtered = allLocations.filter(l => l.city === city);
  const [selected, setSelected] = useState(filtered[0]);

  return (
    <section className="px-6 py-14">

      {/* Heading */}
      <h2 className="text-center text-7xl font-bold mb-10 mx-auto max-w-7xl">
        Our Locations
      </h2>

      <p className="text-center text-xl max-w-6xl mx-auto mb-16 text-gray-700">
        Locate the nearest branch and experience our services up close.
      </p>

      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 mx-auto max-w-7xl">

        {/* City */}
        <select
          value={city}
          onChange={e=>{
            setCity(e.target.value);
            const newList = allLocations.filter(l=>l.city===e.target.value);
            setSelected(newList[0]);
          }}
          className="border p-4 rounded-lg"
        >
          {cities.map(c => <option key={c}>{c}</option>)}
        </select>

        {/* Type */}
        <select
          value={visitType}
          onChange={e => setVisitType(e.target.value)}
          className="border p-4 rounded-lg"
        >
          <option>Dealer Showroom</option>
          <option>Service Center</option>
          <option>Head Office</option>
        </select>
      </div>


      {/* LAYOUT */}
      <div className="grid lg:grid-cols-2 gap-8 mx-auto max-w-7xl">

        {/* LIST */}
        <div className="bg-white rounded-xl shadow h-[450px] overflow-y-auto">

          {filtered.map((place,i)=>(
            <div
              key={i}
              onClick={()=>setSelected(place)}
              className={`p-6 border-b cursor-pointer transition
              ${selected.name===place.name
                ? "bg-red-50"
                : "hover:bg-gray-50"}
              `}
            >
              <h3 className="font-semibold text-lg">{place.name}</h3>
              <p className="text-gray-500 mt-1">{place.address}</p>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                target="_blank"
                className="inline-block mt-3 text-red-600 text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>


        {/* MAP */}
        <div className="rounded-xl overflow-hidden shadow h-[450px]">

          <MapContainer
            center={[selected.lat, selected.lng]}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ChangeMapView coords={[selected.lat, selected.lng]} />

            {filtered.map((loc,i)=>(
              <Marker
                key={i}
                position={[loc.lat, loc.lng]}
                eventHandlers={{ click:()=>setSelected(loc) }}
              >
                <Popup>
                  <strong>{loc.name}</strong><br/>
                  {loc.address}
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>
      </div>
    </section>
  );
}