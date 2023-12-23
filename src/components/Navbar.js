import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="flex justify-center items-center w-full mt-4 px-4">
            <div className="flex justify-between items-center w-full bg-cyan-500 px-4 py-3 rounded-xl max-w-screen-2xl">
                <div className="flex text-white fill-white">
                    <Image src="/next.svg" width={100} height={100} className="mr-2 fill-slate-100" alt="company logo"></Image>
                    <ul className="flex gap-2 ml-3 space-x-1">
                        <li>Home</li>
                        <li>Example</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <button className=" bg-gray-100 font-semibold py-2 px-3 rounded-full hover:bg-gray-200 transition-all duration-150">Sign In</button>
                    <button className=" bg-green-300 font-semibold py-2 px-3 rounded-full hover:bg-green-400 transition-all duration-150">Try It Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;