export default function About () {
    return (
        <div className="mt-[5%] bg-[url(/assets/background2.jpg)] bg-cover bg-center" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 py-30 mx-[10%] gap-4">
                <div className="bg-white rounded-lg shadow p-8 text-gray-900 z-10">
                    <h1 className="font-bold text-2xl">About Us</h1>
                    <p className="text-gray-600 mt-5">Our Recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightfull dining experiences.</p>
                    <button className="mt-5 px-5 py-2 rounded-full bg-[#ff9800] text-white hover:bg-gray-800 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}