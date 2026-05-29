import Image from "next/image";
import { instrumentSerif } from "@/app/layout";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="
    pt-20
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-6
    gap-4
    bg-white
    bg-[linear-gradient(#ececec_1px,transparent_1px),linear-gradient(90deg,#ececec_1px,transparent_1px)]
    bg-[size:40px_40px]
  ">

      <div className="relative" width-70>
        
        <Image
          className="w-full max-w-sm md:max-w-6xl float"
          src="/hero-main-image.png"
          alt="Student studying illustration"
          width={1000}
          height={1000}
        />
        
        <Image
          className="absolute -top-14 -left-30 hidden md:block float"
          src="/hero-clock.png"
          alt="Clock illustration"
          width={80}
          height={80}
        />
        
        <Image
          className="absolute top-20 -right-40 hidden md:block float"
          src="/hero-book.png"
          alt="Book illustration"
          width={80}
          height={80}
        />

        
        <Image
          className="absolute bottom-4 -left-50 hidden md:block float"
          src="/hero-pencil.png"
          alt="Pencil illustration"
          width={80}
          height={80}
        />

      </div>
      
      <h1
        className={`${instrumentSerif.className} text-5xl md:text-6xl text-blue-800 leading-none font-normal`}
      >
        Clear Your Cloudy Mind!
      </h1>
      
      <Link
        href="#"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <Image
          src="/hero-cta.png"
          alt="Cliero AI Get Started Button"
          width={200}
          height={80}
        />
      </Link>

      {/* Subtitle */}
      <p
        className={`${instrumentSerif.className} text-blue-300 mt-4 text-base md:text-4xl opacity-90`}
      >
        Every cloudy mind has a clear sky waiting
      </p>

    </section>
  );
}