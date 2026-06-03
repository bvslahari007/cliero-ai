import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";

export default function Features() {
  return (
<section className="relative md:min-h-screen grid-bg bg-white px-5 py-12 overflow-hidden">
      {/* Heading */}
      <div className="flex justify-center items-center gap-4 mb-16">
        <h2
          className={`${instrumentSerif.className} text-5xl md:text-6xl font-bold text-blue-800`}
        >
          Features
        </h2>

      </div>

      {/* Left Illustration */}
      <Image
        src="/features-img-1.png"
        alt="Student searching"
        width={280}
        height={280}
        className="hidden md:block absolute left-40 bottom-30 float"
      />
      
      <Image
        src="/features-img-2.png"
        alt="Student writing"
        width={250}
        height={250}
        className="hidden md:block absolute right-20 top-60 float"
      />

      
        <Image className="hidden md:block absolute right-80 top-30 float"
          src="/hero-book.png"
          alt="Book"
          width={100}
          height={100}
        />

     
      <Image
        src="/features-img-4-bulb.png"
        alt="bulb"
        width={110}
        height={110}
        className="hidden md:block absolute left-50 top-32 float"      />

      {/* Main Content */}
      <div className="flex flex-col items-center text-center gap-4">

        <div
          className={`${instrumentSerif.className} text-blue-800 text-5xl md:text-7xl leading-relaxed`}
        >
          <p>Ask AI a Question</p>
          <p>Generate Smart Notes</p>
        </div>

        <Link
          href="/signup"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/features-cta.png"
            alt="Try Now"
            width={220}
            height={90}
          />
        </Link>

        <p
          className={`${instrumentSerif.className} text-black text-xl md:text-4xl mt-4`}
        >
          More features coming soon!
        </p>

        {/* Sparkles */}
        <Image
          src="/features-img-3-sparkle.png"
          alt="Sparkles"
          width={80}
          height={80}
          className="float"
        />

      </div>

    </section>
  );
}