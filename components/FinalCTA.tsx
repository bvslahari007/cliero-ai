import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/app/layout";

export default function FinalCTA() {
  return (
    <section className="relative grid-bg bg-white px-2 py-14 overflow-hidden">

      {/* Decorative Images */}
      <Image
        src="/hero-clock.png"
        alt="Clock"
        width={80}
        height={80}
        className="hidden md:block absolute left-50 top-20 float"
      />

      <Image
        src="/hero-book.png"
        alt="Book"
        width={100}
        height={100}
        className="hidden md:block absolute right-40 top-32 float"
      />

      <Image
        src="/features-img-4-bulb.png"
        alt="Bulb"
        width={90}
        height={90}
        className="hidden md:block absolute left-80 bottom-50 float"
      />

      <Image
        src="/features-img-3-sparkle.png"
        alt="Sparkles"
        width={80}
        height={80}
        className="hidden md:block absolute right-70 bottom-46 float"
      />

      {/* CTA Content */}
      <div className="relative flex flex-col items-center text-center">

        <h2
          className={`${instrumentSerif.className} text-5xl md:text-7xl text-blue-800 leading-tight`}
        >
          Ready to study
          <br />
          smarter?
        </h2>

        <div className="flex items-center justify-center gap-2 flex-wrap">

          <span
            className={`${instrumentSerif.className} text-4xl md:text-6xl text-blue-800`}
          >
            Try
          </span>

          <Image
            src="/final-logo.png"
            alt="Cliero"
            width={180}
            height={70}
          />

          <span
            className={`${instrumentSerif.className} text-4xl md:text-6xl text-blue-800`}
          >
            now
          </span>

        </div>

        <Link
          href="#"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/final-cta.png"
            alt="Get Started"
            width={280}
            height={280}
          />
        </Link>

      </div>

    </section>
  );
}