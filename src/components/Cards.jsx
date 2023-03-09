import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper, { Navigation, Pagination } from 'swiper';
import '../slider.css'
import seatbelt from '../assests/seatbelt.png'
import alert from '../assests/alert.png'
import rules from '../assests/rules.jpg'
import maintain from '../assests/maintain.png'
import safedist from '../assests/safedist.png'

import { useEffect, useRef } from 'react';

const Cards = () => {
        const sliderRef = useRef(null);
      
        useEffect(() => {
          if (sliderRef.current) {
            Swiper.use([Navigation, Pagination]);
            new Swiper(sliderRef.current, {
              slidesPerView: 'auto',
              spaceBetween: 20,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            //   pagination: {
            //     el: '.swiper-pagination',
            //     type: 'bullets',
            //     clickable: true,
            //   },
            });
          }
        }, []);
  return (
    <div ref={sliderRef} className="swiper-container">
        <div className='text-center p-8'>
            <h1 className='text-4xl font-bold'>Road Safety Tips</h1>
        </div>
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg lg:h-[300px] bg-[#424874] " loading="lazy">
            <div class="px-6 py-4">
                <div className=''></div>
                <img src={seatbelt} className='w-[90px] mx-auto justify-center rounded-full bg-[#FEFBE9]' alt="" />
                <div class="font-bold text-xl mb-2 text-center text-white p-2">Always wear your seatbelt</div>
                    <p class=" text-base text-[#FEFBE9] text-justify">
                        This is the most important road safety tip. Ensure that you and everyone in the car are wearing a seatbelt. 
                        A seatbelt can reduce the risk of serious injury or death in the event of an accident.
                    </p>
                </div>
            </div>
      </div>
      <div className="swiper-slide">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg lg:h-[300px] bg-[#424874] ">
            <div class="px-6 py-4">
            <img src={rules} className='w-[90px] mx-auto justify-center rounded-full bg-[#FEFBE9]' alt="" />
                <div class="font-bold text-xl mb-2 text-center text-white p-2">Obey traffic rules and regulations</div>
                    <p class=" text-base text-[#FEFBE9] text-justify">
                        Always obey traffic rules and regulations such as speed limits, traffic signals, and road signs. 
                        Do not drive under the influence of drugs or alcohol, and always be alert and focused while driving.
                    </p>
                </div>
            </div>
      </div>
      <div className="swiper-slide">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg lg:h-[300px] bg-[#424874] ">
            <div class="px-6 py-4">
            <img src={safedist} className='w-[90px] mx-auto justify-center rounded-full bg-[#FEFBE9]' alt="" />
                <div class="font-bold text-xl mb-2 text-center text-white p-2">Keep a safe distance</div>
                    <p class=" text-base text-[#FEFBE9] text-justify">
                        Always maintain a safe distance from the vehicle in front of you. This will give you enough time to react in case of an emergency or sudden stop.
                    </p>
                </div>
            </div>
      </div>
      <div className="swiper-slide">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg lg:h-[300px] bg-[#424874] ">
            <div class="px-6 py-4">
            <img src={alert} className='w-[90px] mx-auto justify-center rounded-full bg-[#FEFBE9]' alt="" />
                <div class="font-bold text-xl mb-2 text-center text-white p-2">Stay alert and focused</div>
                    <p class=" text-base text-[#FEFBE9] text-justify">
                        Avoid distractions such as using your phone while driving, eating or drinking, or adjusting the radio. Always keep your eyes on the road and your hands on the wheel.
                    </p>
                </div>
            </div>
      </div>
      <div className="swiper-slide">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg lg:h-[300px] bg-[#424874] ">
            <div class="px-6 py-4">
            <img src={maintain} className='w-[90px] mx-auto justify-center rounded-full bg-[#FEFBE9]' alt="" />
                <div class="font-bold text-xl mb-2 text-center text-white p-2">Maintain your vehicle</div>
                    <p class=" text-base text-[#FEFBE9] text-justify ">
                        Regularly maintain your vehicle to ensure that it is roadworthy. Check your brakes, tires, 
                        lights, and wipers regularly to make sure they are functioning properly.  A well maintained vehicle is less likely to cause an accident on the road.
                    </p>
                </div>
            </div>
      </div>
    </div>
    {/* <div className="swiper-pagination"></div> */}
    {/* <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div> */}
  </div>
  )
}

export default Cards