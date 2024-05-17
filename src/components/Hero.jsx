import React from 'react'
import lineChart from "../assets/hero/line-graph.png"
import meterChart from "../assets/hero/meter.png"
import commercial from "../assets/hero/Commercial.png"


const Hero = () => {
  return (
    <div className=' flex'>
        {/* Left */}
        <div>
            {/* row1 */}
            <div>
                <div className=' flex justify-between items-center'>
                    <div>
                        <h3>Current Market Trend</h3>
                        <p>Track how your rating compares to your industry average.</p>
                    </div>

                    <div className=' flex items-center'>
                        <div>12 months</div>
                        <div>30 days</div>
                        <div>7 days</div>
                    </div>
                </div>
                
                <div>
                    <div>Market</div>
                    <div>Category</div>
                    <div>Products</div>
                    <div>Cross Selling</div>
                    <div>Geography</div>
                </div>

                <div>
                    <img src={lineChart} alt='linechart' />
                </div>
            </div>


            <div>
                <div>
                    <img src={commercial} alt='commercial' />
                </div>

                <div>   
                    <p>Your customer market is increasing! Set up Ad Campaign to reach your customers</p>
                    <p>We will guide you through entire setup of Campaign</p>
                </div>
            </div>
        </div>

        {/* Right */}
        <div>
            2
        </div>
    </div>
  )
}

export default Hero