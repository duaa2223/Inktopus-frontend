
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "./Navbar.scss"
// import "../../App.css";
// import { IoIosCloseCircle } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// function Navbar() {
//   return (
//     <section className='navBarSection'> 
//     <div className="header">
//       <div className="logoDiv">
//        <a href="#" className="logo">
//         <h1 className='flex'><SiTestinglibrary className="icon" /></h1>
//         Inktopus
//        </a>
//       </div>
// <div className="navBar">
  // <ul className="navLists flex">


  //   <li className="navItem">
  //     <a href="#" className="navLink">Home</a>
  //   </li>

  //   <li className="navItem">
  //     <a href="#" className="navLink">sources</a>
  //   </li>

  //   <li className="navItem">
  //     <a href="#" className="navLink">OctoTales</a>
  //   </li>

  //   <li className="navItem">
  //     <a href="#" className="navLink">Pricing</a>
  //   </li>
  // <div className="headerBtns flex">
  //  <button className='btn loginBtn'>
  //   <a href='#'>Login</a>
  //  </button>

  //  <button className='btn loginBtn'>
  //   <a href='#'>Signup</a>
  //  </button>
  // </div>
  // </ul>
//   <div className="closeNavbar">
//   <IoIosCloseCircle className="icon" />
//   </div>
// </div>

// <div className="toggleNavbar">
// <TbGridDots className="icon"/>
// </div>
//     </div>
    
//     </section>
//   );
// }

// export default Navbar;

import { Link } from 'react-router-dom';
import { SiTestinglibrary } from "react-icons/si";
import "./Navbar.scss";
import "../../App.css";
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
import  Resource from '../Resourse/Resourse'
import details from '../details/Details';
import Level from '../Level/Level';
import Carts from '../Carts/Carts';
import About from '../About/About';



// import { Navigation, Pagination } from 'swiper';

// import card2 from '../../assets'
function Navbar() {
useEffect(() => {
  const handleScroll = () => {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
      header.classList.add('bg-[#D0B8A8]');
      
      header.classList.remove('bg-transparent');
    } else {
      // bg-transparent
      // header.classList.add('bg-transparent');
      // header.classList.remove('bg-[#D0B8A8]');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (

<div>
<div
  
>
<header
  id="header"
  className=" bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50"
>
  <div className="container mx-auto flex items-center justify-between px-4 h-16 ">
    <div className="flex items-center space-x-2 ml-16 ">
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
          <Link to="/Resource" className="text-gray-700 hover:text-gray-300 text-xl text-white">
          Resource
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

        <li>
       
        </li>
      </ul>
    </nav>
   
    <Link to="/Login"  className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
            Log-in
          </Link>
  </div>
</header>
  

 
</div>
</div>
  );
}

export default Navbar;

