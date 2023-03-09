import React from 'react'
import '../App.css';
import { useState } from 'react';
import avatar from '../assests/avatar.png'

const Home = () => {
    const [clicked, setClicked] = useState(false);
    const handleStart = () => {
        setClicked(true);
      };
    
      const handleStop = () => {
        setClicked(false);
      };
  return (
    <div className='items-center justify-center'>
        <div className="relative">
            <button className="absolute lg:right-[1100px] lg:top-[355px]  bg-[#A6B1E1] 
            p-2 h-10 w-[175px] rounded-l-lg border text-white md:top-[355px] transform 
            transition duration-700 hover:scale-110 font-bold">Emergency Call</button>
            <button className="absolute lg:left-[671.50px] lg:top-[100.50px] bg-[#A6B1E1] 
            p-2 h-10 w-[175px] rounded border text-white md:top-[108px] md:left-[300.50px] transform 
            transition duration-700 hover:scale-110 font-bold">Open Maps</button>
            <button className="absolute lg:left-[1100px] lg:top-[355px] md:top-[355px] md:left-[600px] bg-[#A6B1E1] 
            p-2 h-10 w-[175px] rounded-r-lg border text-white transform 
            transition duration-700 hover:scale-110 font-bold">Traffic Jam</button>
        </div>
        <div className='flex h-screen items-center justify-center'>
        <div onClick={handleStart} className= ''>
        {clicked ?  <div className={clicked ? 'h-screen flex items-center justify-center' : 'hidden'}>
            <img src={avatar} className='absolute w-16 h-16 rounded-full animate-pulse opacity-100' alt="profile pic" />
            <div className="absolute w-80 h-80 rounded-full bg-[#A6B1E1] opacity-50 animate-pulse"></div>
            <div className="absolute w-64 h-64 rounded-full bg-[#A6B1E1] opacity-30 animate-pulse"></div>
            <div className="absolute w-48 h-48 rounded-full bg-[#A6B1E1] opacity-50 animate-pulse"></div>
            <div className="absolute w-32 h-32 rounded-full bg-[#A6B1E1] opacity-30 animate-pulse"></div>
            <div className="absolute w-16 h-16 rounded-full bg-[#A6B1E1] opacity-10 animate-pulse"></div>
            <div className="absolute w-96 h-96 rounded-full border-4  border-[#A6B1E1]"></div>
            <div className="absolute w-96 h-96 rounded-full border-4 opacity-10 border-[#A6B1E1] animate-rotate"></div>
        </div> : <button className= ' items-center justify-center w-80 h-80 rounded-full bg-[#A6B1E1] opacity-100 text-white transform transition duration-700 hover:scale-110'>
        Start Your Journey</button>}
        </div>
        </div>

        <div onClick={handleStop} className=' relative flex items-center justify-center bottom-[150px]'>
            {clicked ? <button className='h-10 w-50 p-2 rounded border bg-[#A6B1E1] text-white'>Stop Tracking</button>: ''}
        
        </div>
    </div>
  )
}

export default Home