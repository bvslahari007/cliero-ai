"use client";
import Image from "next/image";
import Link from "next/link";
import { interTight } from "@/app/fonts";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="dots-bg bg-blue-900 px-6 py-4 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between">

                <Link href="#" className="transition-transform duration-300 hover:scale-110  ease-in-out">
                         <Image
                    src="/nav logo.png"
                    alt="Cliero AI Logo"
                    width={140}
                    height={50}
                />
                    </Link>
                    <div
  className={`${interTight.className} hidden md:flex items-center gap-10 text-white font-medium text-lg`}
>
  <a
    href="#"
    className="transition-transform duration-300 hover:text-blue-100 hover:scale-110"
  >
    About
  </a>

  <a
    href="/contact"
    className="transition-transform duration-300 hover:text-blue-100 hover:scale-110"
  >
    Contact
  </a>

  <a
    href="/note"
    className="transition-transform duration-300 hover:text-blue-100 hover:scale-110"
  >
    Note For You!
  </a>

  <Link
    href="/signup"
    className="transition-transform duration-300 hover:scale-110"
  >
    <Image
      src="/get-started button-nav bar.png"
      alt="Cliero AI Get Started Button"
      width={140}
      height={50}
    />
  </Link>
</div>

                {isOpen && (
  <div className={`${interTight.className} font-semibold flex flex-col fixed top-20 right-0 px-10 py-30
    gap-8
    h-screen
    w-64
    bg-blue-900
    z-50
    dots-bg
  `}
    >
    <a
      href="#"
      className="text-white text-lg hover:text-blue-200 transition"
    >
      About
    </a>

    <a
      href="/contact"
      className="text-white text-lg hover:text-blue-200 transition"
    >
      Contact
    </a>

    <a
      href="/note"
      className="text-white text-lg hover:text-blue-200 transition"
    >
      Note For You!
    </a>

    <Link
      href="/signup"
      className="transition-transform duration-300 hover:scale-105"
    >
      <Image
        src="/get-started button-nav bar.png"
        alt="Get Started"
        width={140}
        height={50}
      />
    </Link>
  </div>
)}


                <button className="md:hidden text-white text-3xl" aria-label="Open menu"
                onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>

            </div>
        </nav>
    );
}