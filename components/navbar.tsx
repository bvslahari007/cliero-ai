import Image from "next/image";
import Link from "next/link";
import { interTight } from "@/app/fonts";

export default function Navbar() {
    return (
        <nav className="bg-blue-900 px-6 py-4 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between">

                <Link href="#" className="transition-transform duration-300 hover:scale-110  ease-in-out">
                         <Image
                    src="/nav logo.png"
                    alt="Cliero AI Logo"
                    width={140}
                    height={50}
                />
                    </Link>

                <div className={`${interTight.className} hidden md:flex items-center gap-10 text-white font-medium text-lg`}>
                        <a href="#" className="transition-transform duration-300 hover:text-blue-100 hover:scale-110 ease-in-out">
                            About
                        </a>

                        <a href="/contact" className="transition-transform duration-300 hover:text-blue-100 hover:scale-110 ease-in-out">
                            Contact
                         </a>

                        <a href="/note" className="transition-transform duration-300 hover:text-blue-100 hover:scale-110 ease-in-out">
                            Note For You!
                        </a>
                    
                    <Link href="/signup" className="transition-transform duration-300 hover:scale-110  ease-in-out">
                        <Image
                            src="/get-started button-nav bar.png"
                            alt="Cliero AI Get Started Button"
                            width={140}
                            height={50}
                        />
                    </Link>
                </div>


                <button className="md:hidden text-white text-3xl" aria-label="Open menu">
                    ☰
                </button>

            </div>
        </nav>
    );
}