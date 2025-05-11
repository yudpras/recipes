import Image from "next/image";
export default function Header() {   
    return (
        <div className='w-full bg-white text-gray-900 relative'>
            {/* <Image src="/assets/background.png" alt="background-image" width={200} height={200} className="w-full h-full object-cover absolute"></Image> */}
            <div className='p-[10%] h-dvh md:h-[500px] flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex flex-col text-center md:text-start gap-4'>
                    {/* <Image src="/man.webp" alt="A man" width={100} height={100} className="w-32 sm:w-64 md:w-120"/> */}
                    <h1 className='text-4xl font-bold'>
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
                <div className='hidden md:flex gap-4 md:gap-4'>
                    <Image src="/assets/banner.png" alt="image-banner" width={1000} height={2000}/>
                    {/* <Link href="#" className='px-3 py-3 rounded-full border border-gray-500 hover:bg-black hover:text-white'>Conatct Me</Link>
                    <Link href="#" className='px-3 py-3 rounded-full border border-gray-500 hover:bg-black hover:text-white'>My Resume</Link> */}
                </div>
            </div>
        </div>
    );   
}