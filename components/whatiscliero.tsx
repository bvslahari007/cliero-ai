import Image from "next/image";
import { instrumentSerif, interTight } from "@/app/layout";

export default function About() {
  return (
    <section className=" bg-blue-900 px-6 py-8 dots-bg">

      
      <div className="flex justify-center items-center gap-2 mb-5">

        <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl font-bold text-white`}>What Is</h2>

        <Image
          src="/nav logo.png"
          alt="Cliero"
          width={200}
          height={100}
        />

      </div>

      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        
        <div className="flex-1">

          <div className="flex items-start gap-2">
            <p className={`${instrumentSerif.className} text-white text-2xl md:text-4xl leading-relaxed text-left`}
            >
              Cliero AI is an AI-powered study companion that transforms
              your doubts into deep explanations, organised notes
              helping you study smarter every day!
            </p>

          </div>

        </div>

        
        <div className="flex-1 flex justify-center">

          <Image
            className="float"
            src="/what-is-cliero-image.png"
            alt="Student holding an idea"
            width={450}
            height={450}
          />

        </div>

      </div>

    </section>
  );
}