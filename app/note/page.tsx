import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/app/layout";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div>
      <section
        className="
          min-h-screen
          px-6
          py-10
          flex
          flex-col
          items-center
          bg-white
          grid-bg
          text-blue-900
        "
      >
        {/* Back Button */}
        <Link
          href="/"
          className="
            self-start
            text-lg
            hover:text-blue-700
            transition-all
            duration-300
          "
        >
          ← Back to Home
        </Link>

        {/* Quote Mark */}
        <p className="text-8xl text-blue-200 leading-none mt-2">
          "
        </p>

        {/* Glass Card */}
        <div
          className="
            max-w-4xl
            text-center
            bg-white/70            backdrop-blur-sm
            rounded-3xl
            p-9
            shadow-xl
            border
            border-blue-100
          "
        >
          <h1
            className={`${instrumentSerif.className} text-5xl md:text-7xl mb-8 mt-4`}
          >
            A Note From Me
          </h1>
          <div className={instrumentSerif.className}>
            <p className="text-2xl md:text-4xl leading-relaxed">
              Hiii everyone!
            </p>

            <p className="mt-4 text-lg md:text-2xl leading-8">
              Hey! I'm Lahari, a Computer Science student and the creator
              of <span className="font-bold text-blue-700">ClieroAI</span>.
            </p>

            <p className="mt-2 text-lg md:text-2xl leading-8">
              This is my{" "}
              <span className="font-bold text-blue-700">
                first full-stack web development project
              </span>
              . ClieroAI started as a simple idea: helping students clear
              their doubts, organise their learning, and feel less
              overwhelmed during their academic journey.
            </p>

            <p className="mt-2 text-lg md:text-2xl leading-8">
              I built this project while learning web development myself,
              so every page, component, and feature represents a new
              lesson, challenge, and small victory.
            </p>

            <p className="mt-2 text-lg md:text-2xl leading-8">
              If you're using ClieroAI, thank you for being part of this
              journey. I hope it helps you learn with more confidence and
              a little less stress.
              Please leave your feedback in the form present in CONTACT page
              XOXO
            </p>

            {/* Signature */}
            <p
              className={`${instrumentSerif.className}
                mt-10
                text-4xl
                md:text-6xl
                italic
                hover:tracking-widest
                transition-all
                duration-500
                cursor-default
              `}
            >
              ~ Lahari
            </p>
          </div>

          {/* Socials */}
          <p
            className={`${instrumentSerif.className} mb-4 text-xl md:text-2xl`}
          >
            Connect with me
          </p>

          <div className="flex justify-center gap-8">
            <Link
              href="https://www.linkedin.com/in/vinaya-sangeeta-lahari-baswa-027892316/"
              target="_blank"
            >
              <Image
                src="/LinkedIn_icon.svg.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="
                  hover:scale-125
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              />
            </Link>

            <Link
              href="https://github.com/bvslahari007"
              target="_blank"
            >
              <Image
                src="/Githu_icon.png"
                alt="GitHub"
                width={48}
                height={48}
                className="
                  hover:scale-125
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}