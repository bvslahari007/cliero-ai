import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";

export default function Footer(){
    return(
    <footer className="dots-bg bg-blue-900 py-6 px-6">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/">
  <Image
    src="/nav logo.png"
    alt="Cliero"
    width={140}
    height={60}
    className="transition-transform duration-300 hover:scale-110 ease-in-out"
  />
</Link>

          {/* Centre Text */}
          <div className="text-center text-white">

            <p
              className={`${instrumentSerif.className} text-lg md:text-2xl`}
            >
              Clear your cloudy mind.
            </p>

            <p
              className={`${instrumentSerif.className} text-lg md:text-2xl`}
            >
              Happy Learning
            </p>

            <p className="text-sm opacity-80 mt-2">
              Built with ♥ by Lahari
            </p>

            <p className="text-xs opacity-70 mt-1">
              © 2026 Cliero • Built for students
            </p>

          </div>

          {/* Links */}
          <div className={`${interTight.className} flex flex-col text-center md:text-right text-white gap-2`}>
            <Link href="/contact" className="hover:text-blue-200 transition-colors duration-300">
              Contact
            </Link>

            <Link href="/note" className="hover:text-blue-200 transition-colors duration-300">
              Note for You!
            </Link>
          </div>

        </div>

      </footer>
    );
}