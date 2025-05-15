import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" text-gray-700 py-10" id="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Dapur Ummi Deena</h1>
                        <p className="text-gray-400">© 2025 Dapur Ummi Deena. All rights reserved.</p>
                    </div>
                    <div className="mb-4 md:mb-0 w-40">
                        <h1 className="text-2xl font-bold">Social</h1>
                        <div className="text-gray-400">
                            <Link href="https://www.instagram.com/dapurummideena_?igsh=dXJqNTVhM2xkanZi" className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15} className="my-auto fill-gray-400 mr-1">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                                Instagram
                            </Link>
                            <Link href="https://www.tiktok.com/@ummikiki06?_t=ZS-8wNQUsH0EOm&_r=1" className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15} className="my-auto fill-gray-400 mr-1">
                                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                                </svg>
                                Tiktok
                            </Link>

                        </div>
                        <span className="">
                        </span>
                        
                    </div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}