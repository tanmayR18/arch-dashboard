import { CiSearch, CiExport } from "react-icons/ci";
import { BiCustomize } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {

    const [ headerToggle, setHeaderToggle] = useState(true)
  return (
    <div className=" px-5">
        <div className=" flex items-center justify-between py-10">
            <h2 className=" text-text2  font-bold text-3xl">
                Dashboard
            </h2>

            <div className=' flex gap-6 items-center text-text1 font-semibold text-lg'>
                <button>
                    <IoSearchSharp />
                </button>

                <button className=" flex gap-1 items-center">
                    <BiCustomize />
                    <span>Customize</span>
                </button>

                <button className="  flex gap-1 items-center">
                    <CiExport />
                    <span>Export</span>
                </button>
            </div>
        </div>

        <div className=" flex gap-6 border-b-2 border-b-hr pb-4">
            <p 
            onClick={(prevState) => prevState ?  setHeaderToggle(true) : setHeaderToggle(false)}
            className=" relative cursor-pointer">
                Market Analysis
                <div  
                className={`h-[2px] w-full bg-header-hover absolute -bottom-[18px] origin-center duration-300 scale-0 ${headerToggle && "scale-100"}`}></div>
            </p>

            <p
            className=" relative cursor-pointer"
            onClick={(prevState) => prevState ?  setHeaderToggle(false) : setHeaderToggle(true)}
            >
                Performance
                <div  
                className={`h-[2px] w-full bg-header-hover  absolute -bottom-[18px] origin-center duration-300 scale-0 ${!headerToggle && "scale-100"}`}></div>
            </p>
        </div>
    </div>
  )
}

export default Header