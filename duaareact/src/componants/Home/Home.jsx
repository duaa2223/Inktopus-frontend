// import './Home.scss'
import { Link } from 'react-router-dom';
import { SiTestinglibrary } from "react-icons/si";
// import "./Navbar.scss"
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import myLabImage from '../../assets/newlib.svg';
import card1 from'../../assets/sea.png'
import card2 from '../../assets/card2.png'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react'; 
import { useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FaHandHoldingHeart } from "react-icons/fa";
import { SiOctopusdeploy } from "react-icons/si";
import { FaFaceSmileWink } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa";
import about from '../../assets/about.svg'
import footerBackground from '../../assets/4.svg';
import Login from '../Login/Login';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import b1 from '../../assets/habits.jpg'


function Home() {
  const resources = [
    { title: "Resource 1", image:"../../../public/images/habits.jpg" },
    { title: "Resource 2", image: "../../../public/images/power.jpg" },
    { title: "Resource 3", image: "../../../public/images/m2.jpg" },
    { title: "Resource 4", image: "../../../public/images/habits.jpg" },
    { title: "Resource 5", image: "../../../public/images/power.jpg" },
  ];


const swiperRef = useRef(null);

const handlePrevClick = () => {
  if (swiperRef.current) {
    swiperRef.current.swiper.slidePrev();
  }
};

const handleNextClick = () => {
  if (swiperRef.current) {
    swiperRef.current.swiper.slideNext();
  }
};

// to change navbar when scrooling
useEffect(() => {
  const handleScroll = () => {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
      header.classList.add('bg-[#D0B8A8]');
      
      header.classList.remove('bg-transparent');
    } else {
      // bg-transparent
      header.classList.add('bg-transparent');
      header.classList.remove('bg-[#D0B8A8]');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    
    
   
<div className='bg-[#F8EDE3]'>
<Navbar />
<div
  className="w-full h-screen bg-center bg-cover bg-no-repeat  "
  style={{ backgroundImage: `url(${myLabImage})` }}
>
{/* <header
  id="header"
  className="header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-70 transition-colors shadow-md z-50"
>
  <div className="container mx-auto flex items-center justify-between px-4 h-16">
    <div className="flex items-center space-x-2 ml-16">
      <h1 className="flex items-center text-6xl font-bold ">
        <SiTestinglibrary className="icon text-[#8D493A]" />
      </h1>
      <span className='text-4xl text-white'>Inktopus</span>
    </div>

    <nav id="navmenu" className="hidden md:flex space-x-6">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300 text-xl text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/Offers" className="text-gray-700 hover:text-gray-300 text-xl text-white">
            Top Podcasts
          </Link>
        </li>
        <li>
          <Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <a
      className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]"
      href="./loginpage.html"
    >
      Log-in
    </a>
  </div>
</header> */}

  {/* end nav */}
  

 
  
  <div className="[&>*:last-child]:hover:top-0 md:[&>*:last-child]:hover:left-[15rem] lg:[&>*:last-child]:hover:left-[18rem] md:[&>*:last-child]:hover:left-[13rem] xs:[&>*:last-child]:hover:left-[7rem] group absolute top-[30%] md:left-[30%] sm:left-[25%] xs:left-[15%] ">
    <div className="[transition:all_400ms_ease] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl absolute -rotate-[10deg] origin-bottom-left">
      <img
         src={card2}
  className="w-full h-full rounded-sm top-0"
        alt="Frame Two"
      />
    </div>
    <div className="[transition:all_400ms_ease] absolute -rotate-[10deg] last:rotate-[20deg] -top-[2rem] left-[2rem] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl origin-bottom-left">
      <img
         src={card1}
  className="w-full h-full rounded-sm top-0"
        alt="Frame One"
      />
    </div>
  </div>
  {/* top picture */}
  {/* <div className="absolute bg-black/20 py-2 md:top-[75%] sm:top-[70%] xs:top-[60%] mt-12">
    <h6 className="w-full md:px-4 xs:px-2 xl:text-5xl lg:text-5xl sm:text-4xl xs:text-3xl text-white text-center font-serif font-semibold">
    Discover a World of Knowledge at Your Fingertips, Guided by the Octopus to the Most Valuable Learning Resources.
    </h6>
  </div> */}


</div>
{/* end navbar */}
{/* section 2 after herosection  */}
<section>
{/* <div className=" flex items-center justify-center h-screen           bg-black/20 py-2 md:top-[75%] sm:top-[70%] xs:top-[60%] mt-12 w-[400px] ">
    <h6 className="w-full md:px-4 xs:px-2 xl:text-3xl lg:text-5xl sm:text-4xl xs:text-3xl text-white text-center font-serif font-semibold">
    Discover a World of Knowledge at Your Fingertips, Guided by the Octopus to the Most Valuable Learning Resources.
    </h6>
  </div> */}

  <div className="flex items-center justify-center h-[20rem] ">
  <div className="bg-[#DFD3C3] py-2 md:top-[75%] sm:top-[70%] xs:top-[60%] w-[90%] rounded-2xl ">
  <h6 className="w-full md:px-4 xs:px-2 xl:text-3xl lg:text-5xl sm:text-4xl xs:text-3xl text-center font-serif font-bold text-white mt-[2rem] mb-[2rem]">
  Discover a World of Knowledge at Your Fingertips
  <span className="ml-2 text-[#8D493A]">
    <FaHandHoldingHeart className="inline" />
  </span>
  Guided by the Octopus  
  <SiOctopusdeploy className="inline ml-2 text-[#8D493A]" />
  to the Most Valuable Learning Resources.
</h6>


  </div>
</div>
</section>

{/* section3 */}


<section className="w-full bg-[#F8EDE3] py-16">
  <div className="container mx-auto relative">
    <h2 className="mb-[6%] text-4xl font-serif font-semibold text-center mb-8 text-[#8D493A]">
      P<span className='ml-2 text-[#8D493A]'><FaFaceSmileWink className='inline' /></span>pular Right Now 
    </h2>
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {resources.map((resource, index) => (
        <SwiperSlide key={index}>
          <div
          className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${resource.image})` }}
          >
            <div className="w-full h-full bg-[#8D493A]/60 hover:bg-transparent transition-all duration-300 flex items-center justify-center">

              {/* <h3 className="text-white text-2xl font-semibold">{resource.title}</h3> */}
              {/* إضافة زر الشراء الآن */}
              <button className="mt-[18.9rem] bg-[#8D493A] text-white py-2 px-4 rounded hover:bg-[#6b362a]">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* إضافة الأسهم الجانبية */}
    <div
      onClick={handlePrevClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <IoIosArrowBack size={32} color="white" />
    </div>
    <div
      onClick={handleNextClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <IoIosArrowForward size={32} color="white" />
    </div>
  </div>
</section>

{/* 
      section4 */}
    {/* firstcard */}
    <h2 className="mb-[2rem] mt-[5%] text-4xl font-serif font-semibold text-center text-[#8D493A]">Spec<span className='ml-2 text-[#8D493A] '><FaGripfire className='inline'/></span>al Offers </h2>
    <div className='flex justify-center space-x-4 mt-[10%] mb-[10%]'>

<div className="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[20%] bg-[#DFD3C3] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
  {/* Grab your photo from https://artofproblemsolving.com/company/staff */}
  <img
    className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
   src={card2} 
   alt="Lib2"
  />
  {/* <p className="m-[5px] text-[#262626] text-base">Name</p>
  <p className="m-[5px] text-[#777674] text-xs">Title</p> */}

<h2 className="text-2xl font-bold text-center mb-2 mt-2">Special Offer!</h2>
  <p className="text-lg text-center mb-4">Get 20% off on all books when you shop on our website. Use code: BOOK20</p>
  <p className="text-sm text-center mb-4">Offer valid until August 30, 2024</p>
  <a href="/shop" className="block w-full text-center bg-[#8D493A] text-white py-2 rounded">Shop Now</a>
  {/* SVG of Arrow */}
  <svg
    className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={64}
    viewBox="0 0 45 64"
    fill="none"
  >
    <path
      d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
      fill="#8D493A"
    />
  </svg>
</div>
{/* second card */}


<div className="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[20%] bg-[#DFD3C3] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
  {/* Grab your photo from https://artofproblemsolving.com/company/staff */}
  <img
    className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
    src={card2}
  />
 <h2 className="text-2xl font-bold text-center mb-2 mt-2">Special Offer!</h2>
  <p className="text-lg text-center mb-4">Get 20% off on all books when you shop on our website. Use code: BOOK20</p>
  <p className="text-sm text-center mb-4">Offer valid until August 30, 2024</p>
  <a href="/shop" className="block w-full text-center bg-[#8D493A] text-white py-2 rounded">Shop Now</a>
  {/* SVG of Arrow */}
  <svg
    className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={64}
    viewBox="0 0 45 64"
    fill="none"
  >
    <path
      d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
      fill="#8D493A"
    />
  </svg>
</div>
{/* third card */}


<div className="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[20%] bg-[#DFD3C3] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
  {/* Grab your photo from https://artofproblemsolving.com/company/staff */}
  <img
    className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
    src={card2}
  />
 <h2 className="text-2xl font-bold text-center mb-2 mt-2">Special Offer!</h2>
  <p className="text-lg text-center mb-4">Get 20% off on all books when you shop on our website. Use code: BOOK20</p>
  <p className="text-sm text-center mb-4">Offer valid until August 30, 2024</p>
  <a href="/shop" className="block w-full text-center bg-[#8D493A] text-white py-2 rounded">Shop Now</a>
  {/* SVG of Arrow */}
  <svg
    className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={64}
    viewBox="0 0 45 64"
    fill="none"
  >
    <path
      d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
      fill="#8D493A"
    />
  </svg>
</div>
{/* foure card */}


<div className="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[20%] bg-[#DFD3C3] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
  {/* Grab your photo from https://artofproblemsolving.com/company/staff */}
  <img
    className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
    src={card2}
  />
 <h2 className="text-2xl font-bold text-center mb-2 mt-2">Special Offer!</h2>
  <p className="text-lg text-center mb-4">Get 20% off on all books when you shop on our website. Use code: BOOK20</p>
  <p className="text-sm text-center mb-4">Offer valid until August 30, 2024</p>
  <a href="/shop" className="block w-full text-center bg-[#8D493A] text-white py-2 rounded">Shop Now</a>
  {/* SVG of Arrow */}
  <svg
    className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={64}
    viewBox="0 0 45 64"
    fill="none"
  >
    <path
      d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
      fill="#8D493A"
    />
  </svg>
</div>

</div>



{/* section four */}
{/* <div className="relative max-w-7xl mx-auto mt-20">
  <img
    className="h-64 w-full object-cover rounded-md"
    src={about}
    alt="Random image"
  />
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2>
  </div>
</div> */}
    <h2 className="mb-[2rem] mt-[5%] text-4xl font-serif font-semibold text-center text-[#8D493A]">Why Inkt<span className='ml-2 text-[#8D493A]'><SiOctopusdeploy className='inline'/></span>pus ? </h2>
<div className='mb-20%'> <img
    className="h-[35rem] w-full rounded-md"
    src={about}
    alt="Random image"
  /></div>

{/* 
 <section className="w-full bg-[#F8F4E6] py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Popular Resources</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {resources.map((resource, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${resource.image})` }}
              >
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{resource.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section> 


{/* 
<section className="relative w-full h-screen bg-gray-100">
    
      <div className="absolute inset-0">
        <img
          src="https://your-background-image-url.com"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="relative flex items-center justify-center h-full text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-red-500">YourSite</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover and explore the best content with our platform. 
            Find what you're looking for and more!
          </p>
          <a
            href="#get-started"
            className="bg-red-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

    
      <div className="absolute inset-0 bg-black opacity-30" />
    </section> */}
{/* advance section five */}
<div className="w-[70%] h-[30%] mx-auto bg-[#F8EDE3] mt-[10%]">
<div className="relative bg-[#D0B8A8] h-[30%]">
  <div className="absolute inset-x-0 bottom-0  bg-[#F8EDE3] h-[30%]" >
    <svg
      viewBox="0 0 224 12"
      fill="currentColor"
      className="w-full -mb-1 text-white h-[30%]"
      preserveAspectRatio="none"
      
    >
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
    </svg>
  </div>
  <div className=" bg-[#DFD3C3] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-[30%]">
    <div className=" relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center h-[30%]">
      <h2 className="  mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
      Share Your Learning Interests
      </h2>
      <p className="mb-6 text-base text-white md:text-xl">
      Do you have a topic you're passionate about but find it hard to find quality resources for? Help us expand our collection by suggesting areas that you believe are lacking in available learning materials. Whether it's a new subject, a specific book, or an emerging field, your input will guide us in curating valuable resources for our community.
      </p>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16 ">
      <div className="w-full">
  <input
    placeholder="Your Suggestions"
    required=""
    type="text"
    className="block w-full h-28 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
  />
  <div className="flex justify-center">
    <a
      href="/"
      className=" mb-[6rem] mt-[1rem] flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-[#8D493A] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none rounded hover:bg-[#A55B4B]"
    >
      Submit
    </a>
  </div>
</div>


      </form>
      <p className="max-w-md mb-10 text-xs tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16">
     

{/* Your suggestions are invaluable to us and will help make our platform a richer and more comprehensive resource for everyone. */}


      </p>
      {/* <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
        </svg>
      </a> */}
    </div>
  </div>
</div>
</div>
 
 


    {/* Footer section */}
{/* 
    <footer className="bg-cover bg-center" 
  style={{ backgroundImage: `url(${footerBackground})` }}>
  <div>
  <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
    <div className="p-5 sm:w-8/12">
      <h3 className="font-bold text-3xl text-white mb-4">Componentity</h3>
      <div className="flex text-gray-500 uppercase text-sm">
        <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
          Home
        </a>
        <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
          About Us
        </a>
        <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
          Contact Us
        </a>
        <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
          Support Us
        </a>
      </div>
    </div>
    <div className="p-5 sm:w-4/12">
      <h3 className="font-medium text-3xl text-white mb-4">
        Subscribe to our Newsletter
      </h3>
      <form className="mt-4">
        <input
          className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="username@email.com"
        />
      </form>
    </div>
  </div>
  <div className="flex py-5 m-auto text-gray-800 text-lg flex-col items-center border-t max-w-screen-xl">
    <p>© Copyright 2020. All Rights Reserved.</p>
  </div>
</div>

</footer> */}
<Footer/>
</div>
  );
}

export default Home;
////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// // import heroImage from '../../assets/library-hero.jpg';
// // import aboutImage from '../../assets/about-books.jpg';

// function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const books = [
//     { id: 1, title: "The Art of Learning", author: "Josh Waitzkin", cover: "book1.jpg" },
//     { id: 2, title: "Atomic Habits", author: "James Clear", cover: "book2.jpg" },
//     { id: 3, title: "Deep Work", author: "Cal Newport", cover: "book3.jpg" },
//     { id: 4, title: "Mindset", author: "Carol S. Dweck", cover: "book4.jpg" },
//   ];

//   return (
//     <ParallaxProvider>
//       <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
//         <Navbar isScrolled={isScrolled} />
        
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative h-screen flex items-center justify-center overflow-hidden"
//         >
//           <Parallax y={[-20, 20]} tagOuter="figure">
//             {/* <img src={heroImage} alt="Library" className="absolute inset-0 w-full h-full object-cover" /> */}
//           </Parallax>
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//           <div className="relative z-10 text-center text-white">
//             <motion.h1
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-5xl font-bold mb-4"
//             >
//               Discover. Learn. Grow.
//             </motion.h1>
//             <motion.p
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="text-xl mb-8"
//             >
//               Your journey to knowledge starts here
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
//             >
//               Explore Books
//             </motion.button>
//           </div>
//         </motion.section>

//         {/* Featured Books Section */}
//         <section className="py-20 px-4 md:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Featured Books</h2>
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={true}
//             modules={[EffectCoverflow, Pagination]}
//             className="mySwiper"
//           >
//             {books.map((book) => (
//               <SwiperSlide key={book.id}>
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
//                   {/* <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" /> */}
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
//                     <p className="text-gray-600">{book.author}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </section>

//         {/* About Section */}
//         <Parallax y={[-20, 20]} tagOuter="figure">
//           <section className="relative py-20">
//             <div className="absolute inset-0">
//               {/* <img src={aboutImage} alt="About Us" className="w-full h-full object-cover" /> */}
//               <div className="absolute inset-0 bg-black bg-opacity-60" />
//             </div>
//             <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
//               <h2 className="text-4xl font-bold mb-6">About Inktopus</h2>
//               <p className="text-lg mb-8">
//                 We're passionate about connecting readers with the knowledge they seek. Our curated collection of books and resources is designed to inspire, educate, and transform lives through the power of reading.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </section>
//         </Parallax>

//         {/* Categories Section */}
//         <section className="py-20 px-4 md:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Categories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {['Fiction', 'Non-Fiction', 'Science', 'History', 'Self-Help', 'Technology'].map((category) => (
//               <motion.div
//                 key={category}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-lg shadow-lg p-6 text-center"
//               >
//                 <h3 className="text-2xl font-semibold mb-4">{category}</h3>
//                 <p className="text-gray-600 mb-4">Explore our collection of {category.toLowerCase()} books</p>
//                 <button className="text-blue-600 font-semibold hover:underline">
//                   Browse {category}
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Community Join Section */}
//         <section className="bg-blue-600 text-white py-20 px-4 md:px-8">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">Join Our Reading Community</h2>
//             <p className="text-lg mb-8">
//               Get access to exclusive content, reading lists, and connect with fellow book lovers.
//             </p>
//             <form className="flex flex-col md:flex-row gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-3 rounded-full text-gray-800 w-full md:w-auto"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </ParallaxProvider>
//   );
// }

// export default Home;
//////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// // import heroImage from '../../assets/library-hero.jpg';
// // import aboutImage from '../../assets/about-books.jpg';

// function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const books = [
//     { id: 1, title: "The Art of Learning", author: "Josh Waitzkin", cover: "book1.jpg" },
//     { id: 2, title: "Atomic Habits", author: "James Clear", cover: "book2.jpg" },
//     { id: 3, title: "Deep Work", author: "Cal Newport", cover: "book3.jpg" },
//     { id: 4, title: "Mindset", author: "Carol S. Dweck", cover: "book4.jpg" },
//   ];

//   return (
//     <ParallaxProvider>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-b from-[#F8EDE3] to-[#DFD3C3] min-h-screen"
//       >
//         <Navbar isScrolled={isScrolled} />
        
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative h-screen flex items-center justify-center overflow-hidden"
//         >
//           <Parallax y={[-20, 20]} tagOuter="figure">
//             {/* <img src={heroImage} alt="Library" className="absolute inset-0 w-full h-full object-cover" /> */}
//           </Parallax>
//           <div className="absolute inset-0 bg-[#8D493A] bg-opacity-50" />
//           <div className="relative z-10 text-center text-[#F8EDE3]">
//             <motion.h1
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-6xl font-bold mb-4"
//             >
//               Discover. Learn. Grow.
//             </motion.h1>
//             <motion.p
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="text-2xl mb-8"
//             >
//               Your journey to knowledge starts here
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#D0B8A8] text-[#8D493A] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#8D493A] hover:text-[#F8EDE3] transition duration-300"
//             >
//               Explore Books
//             </motion.button>
//           </div>
//         </motion.section>

//         {/* Featured Books Section */}
//         <section className="py-20 px-4 md:px-8 bg-[#DFD3C3]">
//           <h2 className="text-4xl font-bold text-center mb-12 text-[#8D493A]">Featured Books</h2>
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             modules={[EffectCoverflow, Pagination, Autoplay]}
//             className="mySwiper"
//           >
//             {books.map((book) => (
//               <SwiperSlide key={book.id}>
//                 <motion.div
//                   whileHover={{ rotateY: 180 }}
//                   className="bg-[#F8EDE3] rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 h-96 perspective-1000"
//                 >
//                   <AnimatePresence>
//                     <motion.div className="w-full h-full">
//                       <motion.div
//                         initial={{ rotateY: 0 }}
//                         animate={{ rotateY: 180 }}
//                         exit={{ rotateY: 0 }}
//                         className="absolute w-full h-full backface-hidden"
//                       >
//                         <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
//                       </motion.div>
//                       <motion.div
//                         initial={{ rotateY: -180 }}
//                         animate={{ rotateY: 0 }}
//                         exit={{ rotateY: -180 }}
//                         className="absolute w-full h-full backface-hidden bg-[#D0B8A8] p-4 flex flex-col justify-center items-center"
//                       >
//                         <h3 className="text-2xl font-semibold mb-2 text-[#8D493A]">{book.title}</h3>
//                         <p className="text-[#8D493A]">{book.author}</p>
//                         <button className="mt-4 bg-[#8D493A] text-[#F8EDE3] py-2 px-4 rounded hover:bg-[#F8EDE3] hover:text-[#8D493A] transition duration-300">
//                           Read More
//                         </button>
//                       </motion.div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </section>

        // {/* About Section */}
        // <Parallax y={[-20, 20]} tagOuter="figure">
        //   <section className="relative py-20">
        //     <div className="absolute inset-0">
        //       {/* <img src={aboutImage} alt="About Us" className="w-full h-full object-cover" /> */}
        //       <div className="absolute inset-0 bg-[#8D493A] bg-opacity-60" />
        //     </div>
        //     <div className="relative z-10 max-w-3xl mx-auto text-center text-[#F8EDE3]">
        //       <h2 className="text-4xl font-bold mb-6">About Inktopus</h2>
        //       <p className="text-lg mb-8">
        //         We're passionate about connecting readers with the knowledge they seek. Our curated collection of books and resources is designed to inspire, educate, and transform lives through the power of reading.
        //       </p>
        //       <motion.button
        //         whileHover={{ scale: 1.05 }}
        //         whileTap={{ scale: 0.95 }}
        //         className="bg-[#F8EDE3] text-[#8D493A] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#D0B8A8] transition duration-300"
        //       >
        //         Learn More
        //       </motion.button>
        //     </div>
        //   </section>
        // </Parallax>

//         {/* Categories Section */}
//         <section className="py-20 px-4 md:px-8 bg-[#DFD3C3]">
//           <h2 className="text-4xl font-bold text-center mb-12 text-[#8D493A]">Our Categories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {['Fiction', 'Non-Fiction', 'Science', 'History', 'Self-Help', 'Technology'].map((category) => (
//               <motion.div
//                 key={category}
//                 whileHover={{ scale: 1.05, rotateY: 180 }}
//                 className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 text-center h-64 perspective-1000"
//               >
//                 <AnimatePresence>
//                   <motion.div className="w-full h-full relative">
//                     <motion.div
//                       initial={{ rotateY: 0 }}
//                       animate={{ rotateY: 180 }}
//                       exit={{ rotateY: 0 }}
//                       className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center"
//                     >
//                       <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">{category}</h3>
//                       <p className="text-[#8D493A] mb-4">Explore our collection of {category.toLowerCase()} books</p>
//                     </motion.div>
//                     <motion.div
//                       initial={{ rotateY: -180 }}
//                       animate={{ rotateY: 0 }}
//                       exit={{ rotateY: -180 }}
//                       className="absolute w-full h-full backface-hidden bg-[#D0B8A8] flex flex-col justify-center items-center"
//                     >
//                       <button className="text-[#8D493A] font-semibold hover:underline text-xl">
//                         Browse {category}
//                       </button>
//                     </motion.div>
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Community Join Section */}
//         <section className="bg-[#8D493A] text-[#F8EDE3] py-20 px-4 md:px-8">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">Join Our Reading Community</h2>
//             <p className="text-lg mb-8">
//               Get access to exclusive content, reading lists, and connect with fellow book lovers.
//             </p>
//             <form className="flex flex-col md:flex-row gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-3 rounded-full text-[#8D493A] w-full md:w-auto"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#F8EDE3] text-[#8D493A] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#D0B8A8] transition duration-300"
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </div>
//         </section>

//         <Footer />
//       </motion.div>
//     </ParallaxProvider>
//   );
// }

// export default Home;