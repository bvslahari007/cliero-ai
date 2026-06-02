import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/app/layout";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div>
      <main
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

        {/* Header */}
        <div className="text-center mt-6">

          <h1
            className={`${instrumentSerif.className} text-5xl md:text-7xl`}
          >
            Contact Me
          </h1>

          <p
            className={`${instrumentSerif.className} mt-4 text-xl md:text-3xl`}
          >
            Have feedback, ideas, bug reports,
            <br />
            or just want to say hi?
          </p>
        </div>

        {/* Email Card */}
        <div
          className="
            w-full
            max-w-2xl
            mt-12
            p-8
            rounded-3xl
            border
            border-blue-200
            bg-white/80
            backdrop-blur-sm
            shadow-lg
            text-center
          "
        >
          <h2
            className={`${instrumentSerif.className} text-3xl md:text-4xl mb-4`}
          >
            Email Me
          </h2>

          <p className={`${instrumentSerif.className} text-xl md:text-2xl mb-6`}>
            Questions, collaborations, ideas, or support.
          </p>

          <a
            href="mailto:contact.clieroai@gmail.com"
            className={`${instrumentSerif.className} text-xl md:text-2xl mb-6
              text-xl
              font-semibold
              hover:text-blue-700
              transition-colors`}
          >
            contact.clieroai@gmail.com
          </a>
        </div>

        {/* Feedback Card */}
        <div
          className="
            w-full
            max-w-2xl
            mt-8
            p-8
            rounded-3xl
            border
            border-blue-200
            bg-white/80
            backdrop-blur-sm
            shadow-lg
            text-center
          "
        >
          <h2
            className={`${instrumentSerif.className} text-3xl md:text-4xl mb-4`}
          >
            Share Feedback
          </h2>

          <p className={`${instrumentSerif.className} text-xl md:text-2xl mb-6`}>
            Help improve ClieroAI by sharing your thoughts and suggestions.
          </p>

          <Link
            href="https://forms.gle/nw9rk5d34U8T3dtm7"
            target="_blank"
            className="
              inline-block
              px-8
              py-3
              rounded-xl
              border-2
              border-blue-900
              hover:bg-blue-900
              hover:text-white
              transition-all
              duration-300
            "
          >
            Open Feedback Form →
          </Link>
        </div>
        

        {/* Socials */}

        <div className="flex gap-8 mt-4">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <Image
              src="/LinkedIn_icon.svg.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="
                hover:scale-125
                hover:-translate-y-2
                transition-all
                duration-300
              "
            />
          </Link>

          <Link
            href="https://github.com/"
            target="_blank"
          >
            <Image
              src="/Githu_icon.png"
              alt="GitHub"
              width={50}
              height={50}
              className="
                hover:scale-125
                hover:-translate-y-2
                transition-all
                duration-300
              "
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}