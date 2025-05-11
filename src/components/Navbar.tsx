"use client"
import Image from "next/image";
// import { useRef } from "react";
import { useRef } from "react";

export default function Navbar() {
    const sideMenuRef = useRef<HTMLUListElement | null>(null);
    const openMenu = () => {
        if (sideMenuRef.current) {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }
    return (
        <nav className="w-full bg-white shadow-md justify-between flex items-center px-[10%] py-4">
            <div className="flex items-center">
                <Image src="/assets/spoon_and_fork.png" alt="Logo" className="w-5 h-5 mr-2" width={5} height={5}/>
                <h1 className="text-2xl font-bold">Dapur Ummi Deena</h1>
            </div>
            <ul className="hidden md:flex space-x-4">
                <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900">Recipes</a></li>
                <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900">About</a></li>
                <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
            <button className="block md:hidden ml-2" onClick={openMenu}>
            ...
            </button>
            <ul ref={sideMenuRef} className="flex text-black md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <span>X</span>
                </div>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
        </nav>
    );
}