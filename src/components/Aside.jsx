import profileImage from "../assets/aside/profile-image.jpg"
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/aside', false, /\.svg$/));

const Aside = () => {
  return (
    <aside className=" h-screen bg-aside-bg p-2 flex flex-col justify-between items-center">
        {/* top icons */}
        <div className=" flex flex-col gap-6 items-center">
            <div className=" w-11 h-11 text-logo-text bg-logo-bg border-logo-border font-bold text-[22px] border-4 rounded-full cursor-pointer flex justify-center">
                <span className="">
                    a
                </span>
            </div>

            <div className=" flex flex-col gap-2">
                {
                    images.map( (img, index) => {
                        if (index <= 5) {
                            return <button className="cursor-pointer hover:bg-aside-icon-hover p-2 rounded-lg hover:text-aside-icon" key={index}>
                                        <img className=" w-5 " src={img} alt={img} />
                                    </button>
                        }
                        return null;
                    })
                }
            </div>
        </div>
        
        {/* Bottom icons */}
        <div className="flex flex-col gap-2 items-center">
            {
                images.map( (img, index) => {
                    if (index > 5) {
                        return <button className="cursor-pointer hover:bg-aside-icon-hover p-2 rounded-lg hover:text-aside-icon" key={index}>
                                    <img className=" w-5"  src={img} alt={img} />
                                </button>
                    }
                    return null;
                })
            }

            <button className=" rounded-full overflow-hidden h-11 w-11 border-x-logo-text border-y-logo-text border-2 ">
                <img className=" object-contain" src={profileImage} alt={""} />
            </button>
        </div>
    </aside>
  )
}

export default Aside