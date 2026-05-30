import Image from "next/image";
import { instrumentSerif } from "@/app/layout";

export default function WhyChoose() {
  return (
    <section className="relative py-20 flex flex-col items-center justify-center text-center px-6 bg-blue-900 dots-bg overflow-hidden">

      <div className="flex flex-col gap-10">

        <div className="group cursor-default">
          <p
            className={`${instrumentSerif.className} text-4xl md:text-6xl text-white leading-none font-normal`}
          >
            Notes that help you revise faster.
          </p>

          <span
            className="
              mx-auto
              mt-2
              block
              h-[2px]
              w-0
              bg-white
              transition-all
              duration-500
              group-hover:w-3/4
            "
          />
        </div>

        <div className="group cursor-default">
          <p
            className={`${instrumentSerif.className} text-4xl md:text-6xl text-white leading-none font-normal`}
          >
            No fancy prompts required.
          </p>

          <span
            className="
              mx-auto
              mt-2
              block
              h-[2px]
              w-0
              bg-white
              transition-all
              duration-500
              group-hover:w-3/4
            "
          />
        </div>

        <div className="group cursor-default">
          <p
            className={`${instrumentSerif.className} text-4xl md:text-6xl text-white leading-none font-normal`}
          >
            Designed for students 🩵
          </p>

          <span
            className="
              mx-auto
              mt-2
              block
              h-[2px]
              w-0
              bg-white
              transition-all
              duration-500
              group-hover:w-3/4
            "
          />
        </div>

      </div>

    </section>
  );
}