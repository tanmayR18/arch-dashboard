import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import lineChart from "../assets/hero/line-graph.png"
import meterChart from "../assets/hero/meter.png"
import commercial from "../assets/hero/Commercial.png"


const Hero = () => {
  return (
    <div className=' flex  justify-between p-4 gap-2'>
        {/* Left */}
        <div className='border border-text5/30 rounded-xl flex flex-col justify-between'>
            <div className=' flex flex-col gap-3  p-4 '>
                {/* row1 */}
                <div className=' flex flex-col gap-3'>
                    <div className=' flex justify-between items-center'>
                        <div>
                            <h3 className=' from-text2 text-xl font-bold'>Current Market Trend</h3>
                            <p className=' text-text3'>Track how your rating compares to your industry average.</p>
                        </div>

                        <div className=' flex cursor-pointer font-semibold text-text4 items-center border border-text3 border-opacity-30 rounded-lg'>
                            <div className=' p-1 border-r border-text3 border-opacity-30 bg-logo-border/20'>12 months</div>
                            <div className='p-1 border-r border-text3 border-opacity-30 hover:bg-logo-border/20'>30 days</div>
                            <div className='p-1 hover:bg-logo-border/20'>7 days</div>
                        </div>
                    </div>
                    
                    <div className='bg-logo-border/20 flex  gap-5 p-1 text-text5 font-semibold items-center rounded-lg' >
                        <div className=' p-1 px-2 bg-white rounded-lg'>Market</div>
                        <div>Category</div>
                        <div>Products</div>
                        <div>Cross Selling</div>
                        <div>Geography</div>
                    </div>

                    <div>
                        <img src={lineChart} alt='linechart' />
                    </div>
                </div>

            </div>

            <div className=' flex gap-4 p-1 items-center bg-[#FFC0CB]/20'>
                    <div>
                        <img src={commercial} alt='commercial' />
                    </div>

                    <div>   
                        <p className=' text-text2 font-bold text-lg'>Your customer market is increasing! Set up Ad Campaign to reach your customers</p>
                        <p className=' text-text3'>We will guide you through entire setup of Campaign</p>
                    </div>
            </div>
        </div>

        {/* Right */}
        <div className=' border border-text5/30 p-4 rounded-xl'>
            <div className='text-text2 font-bold text-lg pb-10 border-b border-bg1/20 flex justify-between items-center'><p>Industry Opportunities</p> <SlOptionsVertical className=' cursor-pointer' color='gray'/></div>
            <div className=' py-5'>
                <img src={meterChart} alt='meter chart' />
            </div>
            <div className='text-text2 font-bold py-4'>
                You can achieve <span className=' text-text6'>44%</span> more opportunities in market
            </div>
            <ul className='list-disc pl-5 border-t border-text5/30 py-5'>
                <li className=' text-text6'><div className="text-text3 text-sm">Your Position in Market</div></li>
                <li className='text-bg2'><div className="text-text3 text-sm">Total Market Opportunities </div></li>
                <li className=' text-bg3 className="text-text3"'><div className="text-text3 text-sm">Achievable Market Opportunities</div> </li>
            </ul>
        </div>

        
    </div>
  )
}

export default Hero