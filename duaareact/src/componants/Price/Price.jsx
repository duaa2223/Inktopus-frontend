// src/pages/Home.jsx

import Navbar from '../Navbar/Navbar'
import backgroundImage from '../../assets/price.svg'; 
import { FaRegSmileBeam } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
// import './Testimonials.css';
import '../Price/Price.scss'
import boy from '../../assets/boy2.svg'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // لاحظ استخدام '/modules'
import { BsBalloonHeart } from "react-icons/bs";
import Footer from '../Footer/Footer';
import { FaQq } from "react-icons/fa";

// const testimonials = [
//     {
//       image: 'author1.jpg',
//       text: "This is the best service I've ever used!",
//       name: 'John Doe',
//       title: 'CEO, Company'
//     },
//     {
//       image: 'author2.jpg',
//       text: "Amazing experience, highly recommended.",
//       name: 'Jane Smith',
//       title: 'Manager, Another Company'
//     },
    // Add more testimonials as needed
//   ];
const Price = () => {
  return (
    <div className='bg-[#F8EDE3]'
    //  style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
      
      >
      <Navbar />
      {/* باقي محتوى الصفحة */}
      <div  className="flex justify-center items-center min-h-screen px-8 "
      >
    <div className="p-8">
   
  <h1 className=" text-4xl font-bold text-center mb-[5rem] text-zinc-800 mt-[10rem]">Choose Your Plan <span><FaRegSmileBeam className='inline' /></span></h1>
  
  <div className="grid lg:grid-cols-2 gap-24 text-zinc-800">
    
    {/* بطاقة 1 */}
    <div className="flex flex-col items-center  bg-[#DFD3C3] p-4 rounded-lg shadow-lg max-w-sm  bg-opacity-80 transition-transform duration-700 ease-in-out hover:scale-110 hover:bg-opacity-90">
      <div>
        <h2 className="font-extrabold  text-3xl text-center mb-2">Starter</h2>
        <p className="opacity-60 text-center">
          For the individual and small teams
        </p>
        <div className="flex flex-col items-center my-8">
          <p className="font-extrabold text-4xl">$29</p>
          <p className="text-sm opacity-60">/month</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <b>Trending Dashboard</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 ml-1 fill-orange-300"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <b>10 Keywords</b>
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <b>100 Accounts Tracking</b>
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>{" "}
          3 Users
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Basic Support
        </p>
        <div className="flex justify-center mt-8 ">
          <button className="border px-4 py-2 border-[#F8EDE3] border-4 hover:bg-[#A55B4B] rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>

    {/* بطاقة 2 */} 
    <div className="flex flex-col items-center bg-gradient-to-br from-[#F8EDE3] via-[#DFD3C3] to-[#8D493A] p-4 rounded-lg shadow-lg relative border-8 border-[#8D493A] max-w-sm bg-opacity-80 transition-transform duration-700 ease-in-out hover:scale-110 hover:bg-opacity-90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
      >
        <path
          fillRule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-center font-semibold mb-3 text-2xl">Professional</p>
      <p className="text-center opacity-80">
        For the established business with multiple teams
      </p>
      <div className="flex flex-col items-center my-8">
        <p className="font-extrabold text-4xl">$49</p>
        <p className="text-sm opacity-60">/month</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <b>Advanced Dashboard</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 ml-1 fill-orange-300"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <b>50 Keywords</b>
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>{" "}
          1000 Accounts Tracking
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>{" "}
          10 Users
        </p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Premium Support
        </p>
        <div className="flex justify-center mt-8 ">
          <button className="border px-4 py-2 border-[#F8EDE3] border-4 hover:bg-[#A55B4B] rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <h1 className=" text-4xl font-bold text-center mb-[5rem] text-zinc-800 mt-[10rem]">Hear from the Heroes <span><BsBalloonHeart className='inline' /></span></h1>
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}

<SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 1" className="testimonial-img" />
            <p className="testimonial-text">This was an amazing experience!</p>
            <h3 className="testimonial-name">John Doe</h3>
            <h4 className="testimonial-title">Software Engineer</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 2" className="testimonial-img" />
            <p className="testimonial-text">"I highly recommend this service."</p>
            <h3 className="testimonial-name">Jane Smith</h3>
            <h4 className="testimonial-title">Project Manager</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 3" className="testimonial-img" />
            <p className="testimonial-text">They helped me significantly improve my business!</p>
            <h3 className="testimonial-name">Emily Johnson</h3>
            <h4 className="testimonial-title">Graphic Designer</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="testimonial-card ">
            <img src={boy} alt="Person 4" className="testimonial-img" />
            <p className="testimonial-text mt-[2rem] text-xl">Exceptional service and professional team!</p>
            <h3 className="testimonial-name">Michael Brown</h3>
            <h4 className="testimonial-title">Marketing Director</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 3" className="testimonial-img" />
            <p className="testimonial-text">They helped me significantly improve my business!</p>
            <h3 className="testimonial-name">Emily Johnson</h3>
            <h4 className="testimonial-title">Graphic Designer</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 3" className="testimonial-img" />
            <p className="testimonial-text">They helped me significantly improve my business!</p>
            <h3 className="testimonial-name">Emily Johnson</h3>
            <h4 className="testimonial-title">Graphic Designer</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={boy} alt="Person 3" className="testimonial-img" />
            <p className="testimonial-text">They helped me significantly improve my business!</p>
            <h3 className="testimonial-name">Emily Johnson</h3>
            <h4 className="testimonial-title">Graphic Designer</h4>
          </div>
        </SwiperSlide>
    </Swiper>
    {/* FAQ section */}
    <section>
    <h1 className=" text-4xl font-bold text-center mb-[5rem] text-zinc-800 mt-[10rem] text-[#8D493A]">FAQ <span><FaQq className='inline' /></span></h1>
    <ul className="max-w-2xl mx-auto divide-y  shadow shadow-blue-600 rounded-xl">
  <li>
    <details className="group">
      <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
        <span>What am I getting as a Premium Member?</span>
      </summary>
      <article className="px-4 pb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
          sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
          nec ex maximus, suscipit diam vel, tristique tellus.
        </p>
      </article>
    </details>
  </li>
  <li>
    <details className="group">
      <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
        <span>What am I getting as a Premium Member?</span>
      </summary>
      <article className="px-4 pb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
          sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
          nec ex maximus, suscipit diam vel, tristique tellus.{" "}
        </p>
      </article>
    </details>
  </li>
  <li>
    <details className="group">
      <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
        <span>What am I getting as a Premium Member?</span>
      </summary>
      <article className="px-4 pb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
          sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
          nec ex maximus, suscipit diam vel, tristique tellus.{" "}
        </p>
      </article>
    </details>
  </li>
  <li>
    <details className="group">
      <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
        <span>What am I getting as a Premium Member?</span>
      </summary>
      <article className="px-4 pb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum
          sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam
          nec ex maximus, suscipit diam vel, tristique tellus.{" "}
        </p>
      </article>
    </details>
  </li>
</ul>

    </section>
    <Footer/>
    </div>
  );
};

export default Price;
