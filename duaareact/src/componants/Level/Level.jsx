
import  { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../Navbar/Navbar';

const Level = () => {
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
    }).setView([100, 200], 1);
    // mapRef.current.setView([0, 0], 2);
    // إضافة الصور المختلفة
    const bounds1 = [[0, 0], [500, 800]];
    // تعديل الأبعاد لتتناسب مع الصورة الأولى ملاحظه باث الصوره image/name.type
    L.imageOverlay('/images/roadmap.svg', bounds1).addTo(mapRef.current);

    // const bounds2 = [[0, 600], [400, 1200]]; // تعديل الأبعاد لتتناسب مع الصورة الثانية
    // L.imageOverlay('/images/2.svg', bounds2).addTo(mapRef.current);

    // const bounds3 = [[0, 1200], [400, 1800]];
    // // تعديل الأبعاد لتتناسب مع الصورة الثانية
    // L.imageOverlay('/images/3.svg', bounds3).addTo(mapRef.current);


    // const bounds4 = [[400, 0], [800, 600]]; // تعديل الأبعاد لتتناسب مع الصورة الثانية
    // L.imageOverlay('/images/4.svg', bounds4).addTo(mapRef.current);

    // const bounds5 = [[400, 600], [800, 1200]];// تعديل الأبعاد لتتناسب مع الصورة الثانية
    // L.imageOverlay('/images/5.svg', bounds5).addTo(mapRef.current);

//المربع فوق الصور
    // const bounds = [[0, 0], [600, 1600]];
    // L.rectangle(bounds, { color: '#F8EDE3', weight: 1 }).addTo(mapRef.current);

// color: '#8D493A'for color up image add this up  F8EDE3
    // بيانات الكليات
  const colleges = [
    { name: 'College A', position: [200, 300], link: '/college-a' },
    { name: 'College B', position: [100, 400], link: '/college-b' }, // تعديل الموضع
    { name: 'Level 1', position: [100, 200], link: '/details' }, // تعديل الموضع
    { name: 'College D', position: [200, 600], link: '/college-d' },// إضافة كلية جديدة بموقع جديد
    // { name: 'College E', position: [600, 900], link: '/college-e' },
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
   <div id="map" style={{ background:'#DFD3C3', width: '80%', height: '500px', marginTop: '10%', marginBottom:'10%', marginLeft:'10%', border: '2px solid #8D493A', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>;
</>

};

export default Level;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// function PopularResourcesHero() {
//   const resources = [
//     { title: "Resource 1", image: "https://via.placeholder.com/600x400" },
//     { title: "Resource 2", image: "https://via.placeholder.com/600x400" },
//     { title: "Resource 3", image: "https://via.placeholder.com/600x400" },
//   ];

//   return (
    // <section className="w-full bg-[#F8F4E6] py-16">
    //   <div className="container mx-auto">
    //     <h2 className="text-4xl font-bold text-center mb-8">Popular Resources</h2>
    //     <Swiper spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}>
    //       {resources.map((resource, index) => (
    //         <SwiperSlide key={index}>
    //           <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${resource.image})` }}>
    //             <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    //               <h3 className="text-white text-2xl font-semibold">{resource.title}</h3>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </section>
//   );
// }

// export default PopularResourcesHero;