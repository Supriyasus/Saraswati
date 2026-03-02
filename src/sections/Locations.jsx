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
  { city:"Prayagraj", name:"Maruti Suzuki Arena (Head Office)", contact:"08071645716", address:"13, 11/5C, Dr Lohia Rd, Lohiya Marg, Prayagraj, Uttar Pradesh 211001", lat:25.459965323754805, lng:81.82978930718595 },
  { city:"Prayagraj", name:"Hero MotoCorp", contact: "09289922066", address:"No 44, Muir Rd, Om Nagar, Rajapur, Hanumanthpuram, Prayagraj, Uttar Pradesh 211002", lat:25.466556805369077, lng:81.83255851111954 },
  { city:"Prayagraj", name:"Maruti Suzuki True Value", contact:"08037070503",address:"Arazi no. 263, Tehsil-Phulpur, Post, Sarai Inayat, Sarfuddinpur, Phulpur, Uttar Pradesh 221505", lat:25.425720712372005, lng: 81.97926434180494 },
  { city:"Prayagraj", name:"Hero MotoCorp", contact:"09415324203", address:"Mansarovar Crossing 4, Shiv Charan Lal Rd, Prayagraj, Uttar Pradesh 211003", lat:25.44179440122915, lng:81.8410984008747 },
  { city:"Prayagraj", name:"Maruti Suzuki Nexa", contact:"08037892034", address:"Khasra No.638, Tehsil Phoolpur, Andawa, Prayagraj, Uttar Pradesh 221505", lat:25.43125995305259, lng:81.94126142123969 },
  { city:"Prayagraj", name:"Maruti Suzuki Driving School", contact: "08090854003", address:"13, 11 5C, Dr Lohia Rd, Civil Lines, Prayagraj, Uttar Pradesh 211001", lat:25.46171360749004, lng:81.82913145299833 },
  { city:"Prayagraj", name:"Maruti Suzuki Service", contact:"08929000277",address:"MNIT Industrial Estate No 24, Mehdauri Colony, Teliarganj, Prayagraj, Uttar Pradesh 211004", lat:25.49921494741232, lng:81.86312040496281 },
  { city:"Prayagraj", name:"Maruti Suzuki Commercial", contact:"08037240921", address:"21C, Sargam Chauraha, near Sargam Chauraha, Nai Bazar, Chaka, Naini, Prayagraj, Uttar Pradesh 211008", lat:25.389449309375312, lng:81.86844691437184 },
  { city:"Prayagraj", name:"Maruti Suzuki Service", contact:"08071649066", address:"342, Bhagipur, Sarai Inayat, Andwa,Jhunsi Sarpatipur, Uttar Pradesh 221505", lat:25.43061301135929, lng:81.98023532810744 },
  { city:"Meja", name:"Maruti Suzuki Arena", contact: "08037580081", address:"Meja Road, Meja Tehsil, Prayagraj, Uttar Pradesh 212303", lat:25.223447341446313, lng:82.08167690536037 },
  { city:"Koraon", name:"Maruti Suzuki Arena", contact:"08037150007",address:"Khasra No.441, Kala (Kheragarh, Baindavar, Koraon, Uttar Pradesh 212306", lat:24.99256607989822, lng:82.08018560536036 },
  { city:"Mauja", name:"Maruti Suzuki Service", contact:"08090854005", address:"Mauja, Tehsil, Chail, Uttar Pradesh 212202", lat:25.435276414669822, lng:81.62867106200989 },
  { city:"Manjhanpur", name:"Maruti Suzuki Arena", contact:"08037267211", address:"Manjhanpur - Sirathu Rd, Korron, Manjhanpur, Uttar Pradesh 212207", lat:25.551299427329564, lng:81.37104360750409 },
  //{ city:"Prayagraj", name:"Maruti Suzuki Driving School", contact: "08090854003", address:"13, 11 5C, Dr Lohia Rd, Civil Lines, Prayagraj, Uttar Pradesh 211001", lat:25.46171360749004, lng:81.82913145299833 },
  //{ city:"Prayagraj", name:"Maruti Suzuki Service", contact:"08929000277",address:"MNIT Industrial Estate No 24, Mehdauri Colony, Teliarganj, Prayagraj, Uttar Pradesh 211004", lat:25.49921494741232, lng:81.86312040496281 },
  //{ city:"Prayagraj", name:"Maruti Suzuki Commercial", contact:"08037240921", address:"21C, Sargam Chauraha, near Sargam Chauraha, Nai Bazar, Chaka, Naini, Prayagraj, Uttar Pradesh 211008", lat:25.389449309375312, lng:81.86844691437184 }

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
              ${selected===place
                ? "bg-red-50"
                : "hover:bg-gray-50"}
              `}
            >
              <h3 className="font-semibold text-lg">{place.name}</h3>
              <p className="text-gray-500 mt-1">{place.address}</p>
              <p className="text-gray-500 mt-1">{place.contact}</p>

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