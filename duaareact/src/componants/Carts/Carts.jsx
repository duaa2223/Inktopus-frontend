// import './Offers.scss'

import '../Navbar/Navbar'
import img1 from '../../assets/power1.jpg'
import img2 from '../../assets/11.webp'
import img3 from '../../assets/22.webp'
import img4 from '../../assets/33.webp'
import img5 from '../../assets/power2.png'

function Carts() {
  return (
    <div>
      

      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto mt-[7rem]">
  <div className="flex justify-start items-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
      Order #13432
    </h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
      21st March 2021 at 10:34 PM
    </p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={img4}
              alt="book"
            />
            <img
              className="w-full md:hidden"
              src={img3}
              alt="book"
            />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                Learn JavaScript Quickly
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Author:{" "}
                  </span>{" "}
                  John Doe
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Edition:{" "}
                  </span>{" "}
                  3rd Edition
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Genre:{" "}
                  </span>{" "}
                  Programming
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                $30.00{" "}
                <span className="text-red-300 line-through"> $40.00</span>
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                $30.00
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div className="w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={img2}
              alt="book"
            />
            <img
              className="w-full md:hidden"
              src={img1}
              alt="book"
            />
          </div>
          <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                Mastering CSS
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Author:{" "}
                  </span>{" "}
                  Jane Smith
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Edition:{" "}
                  </span>{" "}
                  2nd Edition
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Genre:{" "}
                  </span>{" "}
                  Web Design
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                $20.00{" "}
                <span className="text-red-300 line-through"> $30.00</span>
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                $20.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Summary
          </h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Subtotal
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                $50.00
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Discount{" "}
                <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                  STUDENT
                </span>
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                -$20.00 (40%)
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Shipping
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                $8.00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
              $38.00
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Shipping Address
          </h3>
          <p className="text-base dark:text-white leading-4 text-gray-800">
            John Doe
            <br />
            123 Learning Ave
            <br />
            Book City, BK 56789
            <br />
            United States
            <br />
            Email: john.doe@example.com
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Carts;






