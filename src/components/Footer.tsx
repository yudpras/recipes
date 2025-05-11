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
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Social</h1>
                        <span className="text-gray-400">
                            <Link href="#">Instagram</Link>, 
                            <Link href="#">Tiktok</Link>
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