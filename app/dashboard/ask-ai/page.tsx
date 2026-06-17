import { interTight, instrumentSerif } from "@/app/fonts";
import Image from "next/image";

export default function AskAI() {
  return (
    <div className="notebook-bg h-screen bg-white p-8 md:p-12">
      <h1
        className={`${interTight.className} text-xl md:text-3xl font-bold text-blue-900`}
      >
        Ask AI
      </h1>

      <div
        className="
          mt-2
          rounded-3xl
          h-[75vh]
          md:h-[72vh]
          flex
          flex-col
        "
      >
        {/* Messages Area */}
        <div
          className={`${interTight.className} flex-1 p-4 overflow-y-auto`}
        >
          {/* AI Welcome Message */}
          <div className="max-w-xl rounded-2xl bg-blue-50 p-5 shadow-sm">
            <p className="font-bold text-sm md:text-base text-blue-900">
              Cliero AI
            </p>

            <p className="mt-1 text-sm md:text-base font-semibold text-gray-700">
              Let's make today productive. What would you like to learn?
            </p>
          </div>

          {/* User Message Example */}
          <div className="mt-4 flex justify-end">
            <div
              className="
                max-w-xl
                rounded-2xl
                bg-blue-900
                px-5
                py-3
                text-white
                shadow-sm
              "
            >
              <p className="mb-1 text-xs font-semibold text-white/70">
                You
              </p>

              <p className="text-sm md:text-base">
                What is Binary Search?
              </p>
            </div>
          </div>

          {/* AI Reply Example */}
          <div className="mt-4 max-w-xl rounded-2xl bg-blue-50 p-5 shadow-sm">
            <p className="font-bold text-sm md:text-base text-blue-900">
              Cliero AI
            </p>

            <p className="mt-1 text-sm md:text-base text-gray-700">
              Binary Search is an efficient searching algorithm that works on
              sorted arrays. It repeatedly divides the search space into half
              until the target element is found.
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <p
            className={`${interTight.className} mb-3 text-center text-xs text-gray-400`}
          >
            Cliero AI may occasionally make mistakes. Verify important
            information.
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask anything..."
              className={`${interTight.className}
                flex-1
                text-sm md:text-base
                text-blue-900
                rounded-2xl
                border
                border-blue-200
                bg-white
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-800
              `}
            />

            <button
              className="
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/send-button.png"
                alt="Send Arrow"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Prompt Suggestions */}
      <div
        className={`${interTight.className} hidden md:flex mt-4 flex-wrap gap-2`}
      >
        <button
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-xs md:text-sm
            font-medium
            text-blue-900
            transition-all
            duration-300
            hover:bg-blue-200
          "
        >
          Why find the middle element in Binary Search?
        </button>

        <button
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-xs md:text-sm
            font-medium
            text-blue-900
            transition-all
            duration-300
            hover:bg-blue-200
          "
        >
          What is Recursion?
        </button>

        <button
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-xs md:text-sm
            font-medium
            text-blue-900
            transition-all
            duration-300
            hover:bg-blue-200
          "
        >
          Teach me SQL Joins
        </button>

        <button
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-xs md:text-sm
            font-medium
            text-blue-900
            transition-all
            duration-300
            hover:bg-blue-200
          "
        >
          Explain Load Balancing in detail. Relate to real life examples.
        </button>
      </div>
    </div>
  );
}