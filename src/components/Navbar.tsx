"use client"
import Image from "next/image";
import { useRef } from "react";
import React from 'react'

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
        <nav className="w-full bg-white shadow-md justify-between flex items-center px-[10%] py-4 fixed top-0 z-50">
            <div className="flex items-center">
                <Image src="/assets/spoon_and_fork.png" alt="Logo" className="w-5 h-5 mr-2" width={5} height={5}/>
                <h1 className="text-2xl font-bold">Dapur Ummi Deena</h1>
            </div>
            <ul className="hidden md:flex space-x-4">
                <li><a href="#home" className="font-semibold text-gray-700 hover:text-gray-900">Home</a></li>
                <li><a href="#popular-recipes" className="font-semibold text-gray-700 hover:text-gray-900">Recipes</a></li>
                <li><a href="#about" className="font-semibold text-gray-700 hover:text-gray-900">About</a></li>
                <li><a href="#footer" className="font-semibold text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
            <button className="block md:hidden ml-2" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <ul ref={sideMenuRef} className="flex text-black md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={20} height={20}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <li><a href="#home">Home</a></li>
                <li><a href="#popular-recipes">Recipes</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
    );
}