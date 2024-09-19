import './Details.scss'
import merath from '../../assets/11.svg'
import power from '../../assets/12.svg'
import now from '../../assets/13.svg'
import { Link } from 'react-router-dom';
function Details() {
  return (
    <div>
{/* search section */}
<div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-[10rem]">
    {/* to change h for div by py-16 */}
  <div className="relative isolate overflow-hidden bg-[#DFD3C3] px-6 py-16 text-center sm:px-16 sm:shadow-sm rounded-3xl">
    <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Can't find the resource you need? Try searching here!
    </p>
    <form action="/search">
      <label
        className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="your keyword here"
          name="q"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          required=""
        />
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-[#8D493A] border-[#D0B8A8] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
        >
          <div className="flex items-center transition-all opacity-1">
            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>
          </div>
        </button>
      </label>
    </form>
    <svg
      viewBox="0 0 1024 1024"
      className="absolute left-1/2 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      aria-hidden="true"
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
        fillOpacity="0.7"
      ></circle>
      <defs>
        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
          <stop stopColor="#3b82f6" />
          <stop offset={1} stopColor="#1d4ed8" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>

{/* end search section */}
{/* section fillter */}

{/* fillter section */}
<div className="container mx-auto p-6  ">
  <div className="bg-[#F8EDE3] p-6 rounded-lg shadow-lg">
    {/* <h2 className="text-lg font-semibold mb-4">Tag Cloud</h2> */}
    <div className="flex flex-wrap gap-3 ml-[10rem] ">
    <a
  href="#"
  className="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded-lg text-lg"
>
  Computer Science
</a>
<a
  href="#"
  className="bg-green-200 hover:bg-green-300 py-2 px-4 rounded-lg text-lg"
>
  Software Engineering
</a>
<a
  href="#"
  className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-lg text-lg"
>
  Information Systems
</a>
<a
  href="#"
  className="bg-indigo-200 hover:bg-indigo-300 py-2 px-4 rounded-lg text-lg"
>
  Cybersecurity
</a>
<a
  href="#"
  className="bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg text-lg"
>
  Data Science
</a>
<a
  href="#"
  className="bg-pink-200 hover:bg-pink-300 py-2 px-4 rounded-lg text-lg"
>
  Network Engineering
</a>

    </div>
  </div>
</div>

        {/* section card */}
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  ">
        {/* حاوية الثلاث كاردات */}
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
     
    {/* تعديل ارتفاع الكارد إلى 30 */} 
    {/* حاوية الكارد الواحد */}
  <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

      <a href="#" />
      <div className="relative">       
        <a href="../Product/Product.jsx">
             {/* تعديل ارتفاع الصورة إلى 20 */}
        <img
            className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
            src={power}
            alt="Sunset in the mountains"
          />


<Link to="/product" className="relative block group">
  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  
  <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm group-hover:bg-white group-hover:text-indigo-600 transition duration-500 ease-in-out">
    Price: $9
  </div>
</Link>

        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
            <span className="font-bold">Elite</span>
            <small> Access</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
        >
          Best View in Newyork City
        </a>
        <p className="text-gray-500 text-sm">The city that never sleeps</p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                />
              </g>
            </g>
          </svg>
          <span className="ml-1">2 hour to read</span>
        </span>
      </div>
    </div>
    {/* card2 */}

    <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3]">
      <a href="#" />
      <div className="relative">
        <a href="#">
        <img
            className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
            src={merath}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
        <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            price : 2$
          </div>
        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
            <span className="font-bold"> Elite</span>
            <small> Access </small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
        >
          Best Pizza in Town
        </a>
        <p className="text-gray-500 text-sm">
          The collection of best pizza images in Newyork city
        </p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">3 hour to read</span>
        </span>
      </div>
    </div>
    {/* end card2 */}
    {/* card3 */}
    <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3]">
      <a href="#" />
      <div className="relative">
        <a href="#">
        <img
            className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
            src={now}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            price : 2$
          </div>
        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
            <span className="font-bold"> Elite </span>
            <small> Access</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
        >
          Best Salad Images ever
        </a>
        <p className="text-gray-500 text-sm">
          The collection of best salads of town in pictures
        </p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">1 hour to read</span>
        </span>
      </div>
    </div>
    {/* end card3 */}
    {/* card4 */}
    <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

<a href="#" />
<div className="relative">
  <a href="#">
       {/* تعديل ارتفاع الصورة إلى 20 */}
  <img
      className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
      src={power}
      alt="Sunset in the mountains"
    />

    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  </a>
  <a href="#!">
  <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            price : 2$
          </div>
  </a>
  <a href="!#">
    <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
      <span className="font-bold">Core</span>
      <small>Access</small>
    </div>
  </a>
</div>
<div className="px-6 py-4">
  <a
    href="#"
    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
  >
    Best View in Newyork City
  </a>
  <p className="text-gray-500 text-sm">The city that never sleeps</p>
</div>
<div className="px-6 py-4 flex flex-row items-center">
  <span
    href="#"
    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
  >
    <svg
      height="13px"
      width="13px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
      c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
      c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
          />
        </g>
      </g>
    </svg>
    <span className="ml-1">2 hour to read</span>
  </span>
</div>
</div>
{/* end card 4 */}
{/* card5 */}
<div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

<a href="#" />
<div className="relative">
  <a href="#">
       {/* تعديل ارتفاع الصورة إلى 20 */}
  <img
      className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
      src={power}
      alt="Sunset in the mountains"
    />

    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  </a>
  <a href="#!">
  <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            price : 2$
          </div>
  </a>
  <a href="!#">
    <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
      <span className="font-bold">Core </span>
      <small>Access</small>
    </div>
  </a>
</div>
<div className="px-6 py-4">
  <a
    href="#"
    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
  >
    Best View in Newyork City
  </a>
  <p className="text-gray-500 text-sm">The city that never sleeps</p>
</div>
<div className="px-6 py-4 flex flex-row items-center">
  <span
    href="#"
    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
  >
    <svg
      height="13px"
      width="13px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
      c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
      c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
          />
        </g>
      </g>
    </svg>
    <span className="ml-1">2 hour to read</span>
  </span>
</div>
</div>
{/* end card 5 */}
{/* card6 */}
<div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

<a href="#" />
<div className="relative">
  <a href="#">
       {/* تعديل ارتفاع الصورة إلى 20 */}
  <img
      className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
      src={power}
      alt="Sunset in the mountains"
    />

    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  </a>
  <a href="#!">
  <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Free 
          </div>
  </a>
  <a href="!#">
    {/* <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
      <span className="font-bold">Free</span>
      <small></small>
    </div> */}
  </a>
</div>
<div className="px-6 py-4">
  <a
    href="#"
    className="font-semibold text-lg inline-block hover:text-[#8D493A] transition duration-500 ease-in-out"
  >
    Best View in Newyork City
  </a>
  <p className="text-gray-500 text-sm">The city that never sleeps</p>
</div>
<div className="px-6 py-4 flex flex-row items-center">
  <span
    href="#"
    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
  >
    <svg
      height="13px"
      width="13px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
      c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
      c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
          />
        </g>
      </g>
    </svg>
    <span className="ml-1">1 hour to read</span>
  </span>
</div>
</div>
{/* end card 6 */}
  </div>
</div>
</div>

// <section className="bg-zinc-50 overflow-hidden">
//   <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
//     <div className="flex flex-col sm:flex-row mx-auto">
//       {/*- Starts component */}{" "}
//       <a href="#_">
//         {" "}
//         <img
//           src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
//           alt="#_"
//         />{" "}
//       </a>
//       <a href="#_">
//         {" "}
//         <img
//           src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
//           className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
//           alt="#_"
//         />{" "}
//       </a>
//       <a href="#_">
//         {" "}
//         <img
//           src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
//           alt="#_"
//         />{" "}
//       </a>
//       <a href="#_">
//         {" "}
//         <img
//           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
//           alt="#_"
//         />{" "}
//       </a>
//       {/*- Ends component */}
//     </div>{" "}
//     {/* Starts links to tutorial */}
//     <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
//       <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//         <div className="flex w-0 flex-1 items-center p-4">
//           <div className="w-full">
//             <p className="text-sm font-medium text-neutral-900">Tutorial</p>
//             <p className="mt-1 text-sm text-neutral-500">
//               How to create animated image cards with Tailwind CSS and Astrojs
//             </p>
//             <p className="mt-2 text-xs text-orange-500 underline">
//               {" "}
//               <a href="https://lexingtonthemes.com">
//                 by © Lexington Themes
//               </a>{" "}
//             </p>
//           </div>
//         </div>
//         <div className="flex">
//           <div className="flex flex-col divide-y divide-neutral-200">
//             <div className="flex h-0 flex-1">
//               {" "}
//               <a
//                 target="_blank"
//                 href="https://lexingtonthemes.com/tutorials/how-to-create-animated-images-with-tailwind-css-and-astro-js/"
//                 type="button"
//                 className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               >
//                 Tutorial
//               </a>{" "}
//             </div>
//             <div className="flex h-0 flex-1">
//               {" "}
//               <a
//                 target="_blank"
//                 href="https://github.com/UnwrappedDesign/lexington-tutorials/tree/main/src/pages/simplified-cards"
//                 className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               >
//                 Get the code
//               </a>{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>{" "}
//     {/* Ends links to tutorial */}
//   </div>
// </section>

  
  );
}

export default Details;