import React from 'react'
import { Link } from 'react-scroll'
import { RiPoliceCarFill } from 'react-icons/ri'
import { FaAmbulance } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-[#A6B1E1]">
      <a className="text-white font-bold cursor-wait">
        Your Company
      </a>
      <div className="flex">
      <div class="relative p-2 cursor-pointer">
          <AiFillHome color="white" fontSize="1.5em" className='transform 
            transition duration-700 hover:scale-110 '/>
            <p class="text-white absolute inset-0 top-[40px] z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">Home</p>
        </div>
        <div class="relative p-2 cursor-pointer">
          <RiPoliceCarFill color="white" fontSize="1.5em"/>
            <p class="text-white absolute inset-0 top-[40px] z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">Police</p>
        </div>
        <div class="relative p-2 cursor-pointer">
          <FaAmbulance color="white" fontSize="1.5em"/>
            <p class="text-white absolute inset-0 top-[40px] z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">Ambulance</p>
        </div>
      </div>
    </nav>
  );
};
// bg-[#93BFCF]
export default Navbar