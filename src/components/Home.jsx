import React from "react";
import { AiFillStar } from "react-icons/ai";
import {GoPrimitiveDot} from "react-icons/go";
import {BiRupee} from 'react-icons/bi';
import {MdGamepad} from 'react-icons/md';
import {BsCircleHalf} from 'react-icons/bs';
import {GiRibbonMedal} from 'react-icons/gi';

const Home = () => {
  return (
    <div className="m-16">
      {/* Above Buttons */}
      <div className="flex justify-center my-16">
        <button className="bg-[#003A6E] rounded-md p-5 mr-4 font-bold text-xl text-white">
          Junior <p className="font-medium">(Age 6-10)</p>
        </button>
        <button className="bg-[#d3f8fb] rounded-md p-5 ml-4 font-bold text-xl">
          Senior <p className="font-medium">(Age 10-15)</p>
        </button>
      </div>

      {/* Cards */}
      
      <div className="grid grid-cols-3 gap-14  justify-around">
        {/* 1st card */}
        <div className="shadow-md shadow-slate-400 rounded-sm ">
          <div className="bg-[#d3f8fb] p-4 pt-16 flex flex-col rounded-sm relative">
            <div className="bg-[#3EBEFF] w-20 h-20 rounded-bl-full absolute top-0 right-0 pl-8 pt-2 font-bold text-lg">20% <br /> off</div>
            <div className="bg-[#3EBEFF] w-56 h-8 absolute top-4 left-0 text-white pl-4 font-semibold rounded-r-full">18 sessions</div>
            <div class="w-8 h-8 border-4 border-transparent border-b-0 border-solid transform rotate-45 bg-[#d3f8fb] absolute top-4 left-48"></div>
            <h2 className="font-bold text-2xl text-blue-800">Public Speaking Learn</h2>
            <div className="flex flex-row items-center mt-1">
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-white text-lg mr-1" />
              </span> (50 reviews)
            </div>
          </div>
          <div className="p-4">
            <p>
              Master the most sought-after 21st century skill oratory, through
              speaking activies
            </p>
            <h4 className="font-bold pt-4 pb-2">Students will achieve:</h4>
            <ul className="ml-2">
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Understand <span className="text-gray-600 font-semibold">elements and structure</span> of a story</li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Practice weaving stories with the addition of <span className="text-gray-600 font-semibold">elements and
                details</span> 
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Learn to narrate with confidence using <span className="text-gray-600 font-semibold">expressions and voice
                modulation</span>
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> + ....</li>
            </ul>

            <p className="text-gray-600 font-medium py-6 underline">View Detailed Lesson Plan</p>

            <hr />

            <div className="flex  justify-between pt-4">
                <p className="font-bold text-2xl"><BiRupee className="inline"/>9999</p>
                <p class='text-gray-600'><span className="font-bold text-black text-xl"><BiRupee className="inline"/>200</span> per class</p>
            </div>
            <p className="text-gray-600 line-through py-1"><BiRupee className="inline"/>5999</p>

            <p className="text-[#ff7236] text-sm text-center">We'll schedule the slots as per your convenience</p>
          </div>

          <div className="bg-[#d3f8fb] flex px-4 py-1 justify-center items-center">
            <p><BsCircleHalf className="inline text-[#F9B215] mr-1"/>8 Activities</p>
            <p className="m-2"><MdGamepad className="inline text-[#F9B215] mr-1" size={21}/>3 Games</p>
            <p><GiRibbonMedal className="inline text-[#F9B215]" size={23}/>1 Certificate</p>
          </div>

          <div className="flex justify-center py-8 text-white">
            <button className="bg-gradient-to-r from-[#d64e14] to-[#FBB03B] py-2 px-9 rounded-3xl ">Buy Course</button>
          </div>
        </div>


        {/* 2nd card */}
        <div className="shadow-md shadow-slate-400 rounded-sm">
          <div className="bg-[#003A6E]  p-4 pt-16 flex flex-col rounded-sm relative">
            <div className="bg-[#d3f8fb] w-20 h-20 rounded-bl-full absolute top-0 right-0 pl-8 pt-2 font-bold text-lg">20% <br /> off</div>
            <div className="bg-[#d3f8fb] w-56 h-8 absolute top-4 left-0 text-black pl-4 font-semibold rounded-r-full">18 sessions</div>
            <div class="w-8 h-8 border-4 border-transparent border-b-0 border-solid transform rotate-45 bg-[#003A6E] absolute top-4 left-48"></div>
            <h2 className="font-bold text-2xl text-white">Public Speaking Discover</h2>
            <div className="flex flex-row items-center mt-1 text-white">
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-white text-lg mr-1" />
              </span> (50 reviews)
            </div>
          </div>
          <div className="p-4">
            <p>
              Master the most sought-after 21st century skill oratory, through
              speaking activies
            </p>
            <h4 className="font-bold pt-4 pb-2">Students will achieve:</h4>
            <ul className="ml-2">
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Understand <span className="text-gray-600 font-semibold">elements and structure</span> of a story</li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Practice weaving stories with the addition of <span className="text-gray-600 font-semibold">elements and
                details</span> 
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Learn to narrate with confidence using <span className="text-gray-600 font-semibold">expressions and voice
                modulation</span>
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> + ....</li>
            </ul>

            <p className="text-gray-600 font-medium py-6 underline">View Detailed Lesson Plan</p>

            <hr />

            <div className="flex  justify-between pt-4">
                <p className="font-bold text-2xl"><BiRupee className="inline"/>9999</p>
                <p class='text-gray-600'><span className="font-bold text-black text-xl"><BiRupee className="inline"/>200</span> per class</p>
            </div>
            <p className="text-gray-600 line-through py-1"><BiRupee className="inline"/>5999</p>

            <p className="text-[#ff7236] text-sm text-center">We'll schedule the slots as per your convenience</p>
          </div>

          <div className="bg-[#d3f8fb] flex px-4 py-1 justify-center items-center">
            <p><BsCircleHalf className="inline text-[#F9B215] mr-1"/>8 Activities</p>
            <p className="m-2"><MdGamepad className="inline text-[#F9B215] mr-1" size={21}/>3 Games</p>
            <p><GiRibbonMedal className="inline text-[#F9B215]" size={23}/>1 Certificate</p>
          </div>

          <div className="flex justify-center py-8 text-white">
            <button className="bg-gradient-to-r from-[#d64e14] to-[#FBB03B] py-2 px-9 rounded-3xl ">Buy Course</button>
          </div>
        </div>


        {/* 3rd card */}
        <div className="shadow-md shadow-slate-400 rounded-sm ">
          <div className="bg-[#d3f8fb] p-4 pt-16 flex flex-col rounded-sm relative">
            <div className="bg-[#3EBEFF] w-20 h-20 rounded-bl-full absolute top-0 right-0 pl-8 pt-2 font-bold text-lg">20% <br /> off</div>
            <div className="bg-[#3EBEFF] w-56 h-8 absolute top-4 left-0 text-white pl-4 font-semibold rounded-r-full">18 sessions</div>
            <div class="w-8 h-8 border-4 border-transparent border-b-0 border-solid transform rotate-45 bg-[#d3f8fb] absolute top-4 left-48"></div>
            <h2 className="font-bold text-2xl text-blue-800">Public Speaking Expert</h2>
            <div className="flex flex-row items-center mt-1">
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-[#F9B215] text-lg" />
              </span>
              <span>
                <AiFillStar className="text-white text-lg mr-1" />
              </span> (50 reviews)
            </div>
          </div>
          <div className="p-4">
            <p>
              Master the most sought-after 21st century skill oratory, through
              speaking activies
            </p>
            <h4 className="font-bold pt-4 pb-2">Students will achieve:</h4>
            <ul className="ml-2">
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Understand <span className="text-gray-600 font-semibold">elements and structure</span> of a story</li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Practice weaving stories with the addition of <span className="text-gray-600 font-semibold">elements and
                details</span> 
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> Learn to narrate with confidence using <span className="text-gray-600 font-semibold">expressions and voice
                modulation</span>
              </li>
              <li> <GoPrimitiveDot size={10} className="inline mr-1"/> + ....</li>
            </ul>

            <p className="text-gray-600 font-medium py-6 underline">View Detailed Lesson Plan</p>

            <hr />

            <div className="flex  justify-between pt-4">
                <p className="font-bold text-2xl"><BiRupee className="inline"/>9999</p>
                <p class='text-gray-600'><span className="font-bold text-black text-xl"><BiRupee className="inline"/>200</span> per class</p>
            </div>
            <p className="text-gray-600 line-through py-1"><BiRupee className="inline"/>5999</p>

            <p className="text-[#ff7236] text-sm text-center">We'll schedule the slots as per your convenience</p>
          </div>

          <div className="bg-[#d3f8fb] flex px-4 py-1 justify-center items-center">
            <p><BsCircleHalf className="inline text-[#F9B215] mr-1"/>8 Activities</p>
            <p className="m-2"><MdGamepad className="inline text-[#F9B215] mr-1" size={21}/>3 Games</p>
            <p><GiRibbonMedal className="inline text-[#F9B215]" size={23}/>1 Certificate</p>
          </div>

          <div className="flex justify-center py-8 text-white">
            <button className="bg-gradient-to-r from-[#d64e14] to-[#FBB03B] py-2 px-9 rounded-3xl ">Buy Course</button>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Home;
