
// map by d3 
// import  { useEffect } from 'react';
// const Resourse = () => {
//   useEffect(() => {
//     // تحقق مما إذا كان العنصر موجودًا في DOM قبل تهيئة الخريطة
//     if (document.getElementById('hs-users-datamap')) {
//       // تهيئة الخريطة
//       new Datamap({
//         element: document.getElementById('hs-users-datamap'),
//         projection: 'mercator',
//         fills: {
//           defaultFill: '#f0f0f0',
//           authorHasTraveledTo: '#fa0fa0',
//         },
//         data: {
//           USA: { fillKey: 'authorHasTraveledTo' },
//           JPN: { fillKey: 'authorHasTraveledTo' },
//           RUS: { fillKey: 'authorHasTraveledTo' },
//         },
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Resource Map</h1>
//       <div id="hs-users-datamap" style={{ height: '500px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default Resourse;



// map by leaflet----------------------------------------------------------------------------------


// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// const center = [51.505, -0.09];

// function Resource() {
//   return (
//     <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={center}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default Resource;


// import { useEffect } from "react";
// import L from "leaflet";


// const ResourceMap = () => {
//   useEffect(() => {
//     // إنشاء الخريطة مع إعدادات المركز والتكبير
//     const map = L.map("mapContainer").setView([20, 0], 2);

//     // إضافة طبقة الخريطة الأساسية من OpenStreetMap
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     // البيانات الخاصة بالدول
//     const dataSet = {
//       BRA: {
//         active: { value: "5,101", percent: "42.2", isGrown: false },
//         new: { value: "444", percent: "41.2", isGrown: false },
//         coordinates: [-14.235, -51.9253],
//         short: "br",
//       },
//       CHN: {
//         active: { value: "10,101", percent: "13.7", isGrown: true },
//         new: { value: "509", percent: "0.1", isGrown: false },
//         coordinates: [35.8617, 104.1954],
//         short: "cn",
//       },
//       DEU: {
//         active: { value: "8,408", percent: "5.4", isGrown: false },
//         new: { value: "1001", percent: "5.1", isGrown: true },
//         coordinates: [51.1657, 10.4515],
//         short: "de",
//       },
//       GBR: {
//         active: { value: "4,889", percent: "9.1", isGrown: false },
//         new: { value: "2,001", percent: "3.2", isGrown: true },
//         coordinates: [55.3781, -3.436],
//         short: "gb",
//       },
//       IND: {
//         active: { value: "1,408", percent: "19.2", isGrown: true },
//         new: { value: "392", percent: "11.1", isGrown: true },
//         coordinates: [20.5937, 78.9629],
//         short: "in",
//       },
//       USA: {
//         active: { value: "392", percent: "0.9", isGrown: true },
//         new: { value: "1,408", percent: "2.2", isGrown: true },
//         coordinates: [37.0902, -95.7129],
//         short: "us",
//       },
//     };

//     // إضافة العلامات (Markers) مع بيانات الدولة
//     Object.keys(dataSet).forEach((key) => {
//       const country = dataSet[key];
//       const popupContent = `
//         <div style="text-align: center;">
//           <img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${country.short}.svg" alt="${country.short}" style="width: 24px; height: 24px; border-radius: 50%;" />
//           <h4>${key}</h4>
//           <p>Active: ${country.active.value} (${country.active.percent}%)</p>
//           <p>New: ${country.new.value} (${country.new.percent}%)</p>
//         </div>
//       `;

//       L.marker(country.coordinates)
//         .addTo(map)
//         .bindPopup(popupContent);
//     });
//   }, []);

//   return (
//     <div id="mapContainer" style={{ height: "500px", width: "100%" }}></div>
//   );
// };

// export default ResourceMap;


// Resourse.jsx

// map by leaflet 2--------------------------------------------------------------------------------------
// import React from 'react';
// import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const collegeData = [
//   { name: 'College A', coordinates: [31.963158, 35.930359], color: '#ff0000' },
//   { name: 'College B', coordinates: [32.085300, 34.781768], color: '#00ff00' },
//   { name: 'College C', coordinates: [30.044420, 31.235712], color: '#0000ff' }
// ];

// const Resourse = () => {
//   const handleCollegeClick = (collegeName) => {
//     // Replace with your navigation logic
//     console.log(`Navigating to resources for ${collegeName}`);
//     // For example, you could use react-router to navigate to the college resources page
//   };

//   return (
//     <MapContainer center={[31.963158, 35.930359]} zoom={6} style={{ height: '500px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {collegeData.map((college, index) => (
//         <CircleMarker
//           key={index}
//           center={college.coordinates}
//           pathOptions={{ color: college.color }}
//           radius={20}
//           eventHandlers={{
//             click: () => handleCollegeClick(college.name),
//             mouseover: (e) => {
//               e.target.setStyle({ fillColor: '#FFFF00' });
//             },
//             mouseout: (e) => {
//               e.target.setStyle({ fillColor: college.color });
//             },
//           }}
//         >
//           <Popup>{college.name}</Popup>
//         </CircleMarker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Resourse;


// Resourse.jsx


// map lealeft3------------------------------------------------------------------------------------------------
// import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// // Dummy GeoJSON data for demonstration purposes
// const geojsonData = {
//   "type": "FeatureCollection",
//   "features": [
//     // Example features; replace with your actual GeoJSON data
//     {
//       "type": "Feature",
//       "properties": { "name": "Area 1" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//           [30.0, 30.0], [30.1, 30.0], [30.1, 30.1], [30.0, 30.1], [30.0, 30.0]
//         ]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Area 2" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//           [31.0, 31.0], [31.1, 31.0], [31.1, 31.1], [31.0, 31.1], [31.0, 31.0]
//         ]]
//       }
//     }
//     // Add more features as needed
//   ]
// };

// const handleAreaClick = (name) => {
//   console.log(`Navigating to resources for ${name}`);
//   // Add your navigation logic here
// };

// const Resourse = () => {
//   return (
//     <MapContainer center={[30.5, 30.5]} zoom={5} style={{ height: '500px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <GeoJSON
//         data={geojsonData}
//         style={{
//           color: '#000',
//           weight: 2,
//           opacity: 1,
//           fillOpacity: 0.5
//         }}
//         onEachFeature={(feature, layer) => {
//           layer.on({
//             click: () => handleAreaClick(feature.properties.name)
//           });
//         }}
//       />
//       {geojsonData.features.map((feature, index) => (
//         <CircleMarker
//           key={index}
//           center={[feature.geometry.coordinates[0][0][1], feature.geometry.coordinates[0][0][0]]}
//           pathOptions={{ color: '#ff7800' }}
//           radius={10}
//           eventHandlers={{
//             click: () => handleAreaClick(feature.properties.name),
//             mouseover: (e) => {
//               e.target.setStyle({ fillColor: '#FFFF00' });
//             },
//             mouseout: (e) => {
//               e.target.setStyle({ fillColor: '#ff7800' });
//             },
//           }}
//         >
//           <Popup>{feature.properties.name}</Popup>
//         </CircleMarker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Resourse;

//same4
// import React from 'react';
// import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// // GeoJSON data for custom map (replace with your actual data)
// const geojsonData = {
//   "type": "FeatureCollection",
//   "features": [
//     // Example features; replace with your actual GeoJSON data
//     {
//       "type": "Feature",
//       "properties": { "name": "College 1" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//           [30.0, 30.0], [30.1, 30.0], [30.1, 30.1], [30.0, 30.1], [30.0, 30.0]
//         ]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "College 2" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//           [31.0, 31.0], [31.1, 31.0], [31.1, 31.1], [31.0, 31.1], [31.0, 31.0]
//         ]]
//       }
//     }
//     // Add more features as needed
//   ]
// };

// const handleAreaClick = (name) => {
//   console.log(`Navigating to resources for ${name}`);
//   // Add your navigation logic here
// };

// const Resourse = () => {
//   return (
//     <MapContainer center={[30.5, 30.5]} zoom={5} style={{ height: '500px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <GeoJSON
//         data={geojsonData}
//         style={{
//           color: '#000',
//           weight: 2,
//           opacity: 1,
//           fillOpacity: 0.5
//         }}
//         onEachFeature={(feature, layer) => {
//           layer.on({
//             click: () => handleAreaClick(feature.properties.name)
//           });
//         }}
//       />
//       {geojsonData.features.map((feature, index) => (
//         <CircleMarker
//           key={index}
//           center={[
//             (feature.geometry.coordinates[0][0][1] + feature.geometry.coordinates[0][2][1]) / 2,
//             (feature.geometry.coordinates[0][0][0] + feature.geometry.coordinates[0][2][0]) / 2
//           ]}
//           pathOptions={{ color: '#ff7800' }}
//           radius={10}
//           eventHandlers={{
//             click: () => handleAreaClick(feature.properties.name),
//             mouseover: (e) => {
//               e.target.setStyle({ fillColor: '#FFFF00' });
//             },
//             mouseout: (e) => {
//               e.target.setStyle({ fillColor: '#ff7800' });
//             },
//           }}
//         >
//           <Popup>{feature.properties.name}</Popup>
//         </CircleMarker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Resourse;

// map lea work 
// import  { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import Navbar from '../Navbar/Navbar';

// const Resource= () => {
//   const mapRef = useRef(null);  // Create a ref to hold the map instance

//   useEffect(() => {
//     // Check if the map has already been initialized
//     if (mapRef.current) return;

//     // Initialize the map
//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       maxZoom: 10,
//     });

//     // Set map bounds
//     const bounds = [[0, 0], [600, 1000]];
//     // const bounds = [
//     //   [0, 0],           // الزاوية الجنوبية الغربية
//     //   [mapRef.current.getSize().y, mapRef.current.getSize().x]  // الزاوية الشمالية الشرقية
//     // ];
    
//     const image = L.imageOverlay('../../../public/images/map.png', bounds).addTo(mapRef.current);

//     mapRef.current.fitBounds(bounds);

//     // Add circles
//     const circles = [
//       { lat: 200, lng: 200, name: 'College A', url: '/college-a' },
//       { lat: 300, lng: 400, name: 'College B', url: '/college-b' },
//       // Add more circles as needed
//     ];

//     circles.forEach(({ lat, lng, name, url }) => {
//       L.circle([lat, lng], {
//         color: 'red',
//         radius: 50,
//       }).addTo(mapRef.current).bindPopup(`<a href="${url}">${name}</a>`);
//     });

//     // Clean up function to remove the map instance if needed
//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//         mapRef.current = null;
//       }
//     };

//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <>
//     < Navbar />
//   <div id="map" style={{ width: '80%', height: '500px' ,  marginTop: '10%',marginBottom:'10%', marginLeft:'10%' }}></div>
//   </>
//   );
// };

// export default Resource;



// import { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const Resource = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       return; // إذا كانت الخريطة موجودة، لا تقم بإنشاء واحدة جديدة
//     }

//     // إنشاء الخريطة مع الإعدادات اللازمة
//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple, // استخدم CRS بسيطة لعرض الصور بدلاً من خريطة العالم
//       minZoom: -5, // تعيين مستوى تكبير أقل ليتناسب مع الصورة الكبيرة
//       maxZoom: 5, // تعيين مستوى تكبير أعلى إذا لزم الأمر
//     }).setView([0, 0], 0);

//     // إضافة الصورة الأساسية
//     const bounds = [[0, 0], [1000, 1500]]; // تعديل الأبعاد لتتناسب مع الصورة الخاصة بك
//     L.imageOverlay('/images/map.png', bounds).addTo(mapRef.current);

//     // بيانات الكليات
//     const colleges = [
//       { name: 'College A', position: [100, 200], link: '/college-a' },
//       { name: 'College B', position: [300, 400], link: '/college-b' },
//       { name: 'College C', position: [500, 600], link: '/college-c' },
//       // أضف المزيد من الكليات حسب الحاجة
//     ];

//     // إضافة دوائر وكلية
//     colleges.forEach(college => {
//       const circle = L.circle(college.position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 50 // تعديل الحجم حسب الحاجة
//       }).addTo(mapRef.current);

//       circle.bindPopup(`<b>${college.name}</b>`)
//         .on('click', () => {
//           window.location.href = college.link; // الانتقال إلى الرابط عند النقر على الدائرة
//         });
//     });

//   }, []); // تأكد من تنفيذ useEffect مرة واحدة فقط عند تحميل المكون

//   return <div id="map" style={{ height: '600px', width: '100%' }}></div>;
// };

// export default Resource;


import  { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../Navbar/Navbar';
// import Resource from '../Resourse/Resourse'
import { RiCollageFill } from "react-icons/ri";
const Resource = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      return; // إذا كانت الخريطة موجودة، لا تقم بإنشاء واحدة جديدة
    }

    // إنشاء الخريطة مع الإعدادات اللازمة
    mapRef.current = L.map('map', {
      crs: L.CRS.Simple, // استخدم CRS بسيطة لعرض الصور بدلاً من خريطة العالم
      minZoom: -5, // تعيين مستوى تكبير أقل ليتناسب مع الصورة الكبيرة
      maxZoom: 5, // تعيين مستوى تكبير أعلى إذا لزم الأمر
    }).setView([300, 600], 0);
    // mapRef.current.setView([0, 0], 2);
    // إضافة الصور المختلفة
    const bounds1 = [[0, 0], [500, 800]];
    L.imageOverlay('/images/1.svg', bounds1).addTo(mapRef.current);
    
    const bounds2 = [[0, 800], [500, 1600]]; // تعديل الأبعاد
    L.imageOverlay('/images/2.svg', bounds2).addTo(mapRef.current);
    
    const bounds3 = [[0, 1600], [500, 2400]]; // تعديل الأبعاد
    L.imageOverlay('/images/3.svg', bounds3).addTo(mapRef.current);
    
    const bounds4 = [[500, 0], [1000, 800]]; // تعديل الأبعاد
    L.imageOverlay('/images/4.svg', bounds4).addTo(mapRef.current);
    
    const bounds5 = [[500, 800], [1000, 1600]]; // تعديل الأبعاد
    L.imageOverlay('/images/5.svg', bounds5).addTo(mapRef.current);
    
//المربع فوق الصور
    // const bounds = [[0, 0], [600, 1600]];
    // L.rectangle(bounds, { color: '#F8EDE3', weight: 1 }).addTo(mapRef.current);

// color: '#8D493A'for color up image add this up  F8EDE3
    // بيانات الكليات
  // const colleges = [
  //   { name: 'College A', position: [200, 300], link: '/college-a' },
  //   { name: 'IT', position: [200, 900], link: '/category' }, // تعديل الموضع
  //   { name: 'College C', position: [200, 1500], link: '/college-c' }, // تعديل الموضع
  //   { name: 'College D', position: [600, 300], link: '/college-d' },// إضافة كلية جديدة بموقع جديد
  //   { name: 'College E', position: [600, 900], link: '/college-e' },
  // ];

  const colleges = [
    { name: 'College A', position: [250, 400], link: '/category/college-a' },
    { name: 'It', position: [250, 1200], link: '/level'  }, // داخل الصورة الثانية
    { name: 'College C', position: [250, 2000], link: '/category/college-c' }, // داخل الصورة الثالثة
    { name: 'College D', position: [750, 400], link: '/category/college-d' },  // داخل الصورة الرابعة
    { name: 'College E', position: [750, 1200], link: '/category/college-e' }, // داخل الصورة الخامسة
  ];
  

    // إضافة دوائر وكلية
    colleges.forEach(college => {
      const circle = L.circle(college.position, {
        color: 'red',
        fillColor: '#f03',
        // fillOpacity: 0.5,
        radius: 50 // تعديل الحجم حسب الحاجة
      }).addTo(mapRef.current);

      circle.bindTooltip(college.name, {
        permanent: false, 
        direction: 'top'
      });
      
     
circle.bindPopup(`<b>${college.name}</b>`)
.on('click', () => {
  window.location.href = college.link;
});

    });

  }, []); // تأكد من تنفيذ useEffect مرة واحدة فقط عند تحميل المكون

  return <>
  < Navbar />
 <h1 className=" text-4xl font-bold text-center text-zinc-800 mt-[7rem]">Choose Your College <RiCollageFill className='inline' /><span></span></h1>
   <div id="map" style={{ background:'#DFD3C3', width: '80%', height: '500px', marginTop: '2%', marginLeft:'10%', border: '2px solid #8D493A', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>;
</>

};

export default Resource;
