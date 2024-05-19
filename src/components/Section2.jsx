import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { FaArrowTrendUp } from "react-icons/fa6";
import  pieChart from "../assets/hero/pie.png"
import  container from "../assets/hero/container.png"

const Section2 = () => {
  return (
        <div className=" flex gap-2 justify-between p-4">
            {/* Left */}
            <div className="border border-text5/30 p-4 rounded-xl">
                <div className=' text-text2 flex justify-between items-center py-4 border-b border-text5/30'>
                    <p className=' text-lg font-bold'>Trending in your Industry</p>
                    <SlOptionsVertical className=' cursor-pointer' color='gray'/>
                </div>

                <div className=' flex gap-10 p-8'>
                    <img src={pieChart} alt='piechart' />
                    <div className=' text-text7 flex flex-col gap-5 justify-between'>

                        <div className=' flex flex-col gap-2'>
                            <p className=' text-lg font-bold'>
                                32%
                            </p>
                            <ul className=' pl-5 list-disc text-bg4'>
                                <li className=''><div className='text-text7'>Pattern Tiles</div></li>
                            </ul>
                        </div>
                        <div  className=' flex flex-col gap-2'>
                            <p className=' text-lg font-bold'>
                                49%
                            </p>
                            <ul className=' pl-5 list-disc text-bg5'>
                                <li className=''><div className='text-text7'>Wooden Floor</div></li>
                            </ul>
                        </div>
                        <div  className=' flex flex-col gap-2'>
                            <p className=' text-lg font-bold'>
                                27%
                            </p>
                            <ul className=' pl-5 list-disc text-bg6'>
                                <li className=''><div className='text-text7'>Stone Textured tiles</div></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=' bg-bg7 px-20 py-5 rounded-xl'>
                    <p className='text-text8 font-semibold'>
                        Wooden floor is in trending , set up campaign for wooden tiles to reach these users
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className='border border-text5/30 rounded-xl  flex flex-col justify-between pb-4'>
            <div className=" flex flex-col  p-4 justify-between">
                <div>
                    <div className=' text-text2 flex justify-between items-center py-4 border-b border-text5/30'>
                        <p className=' text-lg font-bold'>Ad Campaign Performance</p>
                        <SlOptionsVertical className=' cursor-pointer' color='gray'/>
                    </div>

                    <div className=' flex flex-col gap-5 p-8'>
                        <div className=' grid grid-cols-3 gap-4'>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                                    Total User
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>4,862</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >9.2%</p></p>
                                </div>
                            </div>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                                    Sales
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>2,671</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >6.6%</p></p>
                                </div>
                            </div>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                                    Conversion Rate
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>82%</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >8.1%</p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <img className=' self-end scale-y-125' src={container} alt='ad chart' />
            </div>
        </div>
  )
}

export default Section2