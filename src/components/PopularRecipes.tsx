import Image from "next/image";
import Link from "next/link";
export default function PopularRecipes() {
    return (
        <div className="w-full bg-white text-gray-900 py-10">
            <div className="px-[10%]">
                <h1 className="text-4xl font-bold text-left mb-8">Popular Recipes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Recipe Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image width={300} height={300} src="/assets/rendang.png" alt="Recipe 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Rendang Padang</h2>
                            <Link href="#" className="text-[#ff9800]">View Recipes</Link>
                        </div>
                    </div>
                    {/* Repeat for more recipes */}
                    {/* Recipe Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image width={300} height={300} src="/assets/ceker.jpg" alt="Recipe 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Ceker Ayam Mercon</h2>
                            <Link href="#" className="text-[#ff9800]">View Recipes</Link>
                        </div>
                    </div>
                    {/* Repeat for more recipes */}
                    {/* Recipe Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image width={300} height={300} src="/assets/pindang-patin.jpg" alt="Recipe 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Pindang Patin</h2>
                            <Link href="#" className="text-[#ff9800]">View Recipes</Link>
                        </div>
                    </div>
                    {/* Repeat for more recipes */}
                    {/* Recipe Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image width={300} height={300} src="/assets/garang-asem.jpg" alt="Recipe 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Garang Asem</h2>
                            <Link href="#" className="text-[#ff9800]">View Recipes</Link>
                        </div>
                    </div>
                    {/* Repeat for more recipes */}
                </div>
            </div>
        </div>
    );
}