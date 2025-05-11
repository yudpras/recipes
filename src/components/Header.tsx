import Image from "next/image";
export default function Header() {   
    return (
        <div className='w-full bg-white text-gray-900 relative mt-4' id="home">
            {/* <Image src="/assets/background.png" alt="background-image" width={200} height={200} className="w-full h-full object-cover absolute"></Image> */}
            <div className='p-[10%] h-120 md:h-[500px] flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex flex-col text-center md:text-start gap-4'>
                    {/* <Image src="/man.webp" alt="A man" width={100} height={100} className="w-32 sm:w-64 md:w-120"/> */}
                    <h1 className='text-4xl font-bold pt-10'>
                        Cooking made fun and easy: Unleash Your Inner Chef with Dapur Ummi Deena
                    </h1>
                    <p className="text-lg text-gray-500 py-7">
                        Discover more than 100 delicious recipes, from appetizers to desserts, all in one place.
                    </p>
                    <div className="justify-center md:justify-start flex gap-4">
                        <button className="px-5 py-2 rounded-full bg-[#ff9800] text-white hover:bg-gray-800 transition duration-300">
                            Explore Recipes
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex gap-4 md:gap-4 relative'>
                    <Image src="/assets/banner.png" alt="image-banner" className="z-10" width={1000} height={2000}/>
                    <span className="absolute -top-20">
                        <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF9800" d="M29.6,-52.9C40.5,-44.9,52.9,-41.3,61.3,-33.2C69.7,-25.1,74.1,-12.6,74.7,0.3C75.3,13.2,72,26.5,66.1,38.9C60.2,51.3,51.5,62.8,40.1,72.5C28.6,82.1,14.3,90,-1.1,91.9C-16.5,93.8,-33,89.8,-46.7,81.4C-60.5,73,-71.4,60.3,-76,46C-80.6,31.7,-78.9,15.8,-75.6,1.9C-72.3,-12,-67.4,-24,-60.1,-33.8C-52.9,-43.5,-43.3,-50.9,-32.8,-59.1C-22.4,-67.4,-11.2,-76.5,-0.9,-74.8C9.3,-73.2,18.7,-60.9,29.6,-52.9Z" transform="translate(100 100) scale(1.3)"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );   
}