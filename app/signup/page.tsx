import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/app/layout";

export default function SignUp() {
  return (
    <main
      className="
        min-h-screen
        px-6
        flex
        flex-col
        items-center
        bg-white
        grid-bg
        text-blue-900
        border-l-0
    md:border-l-61
    border-blue-900
    pl-6
      "
    >
      <Link
  href="/"
  className="
    self-start
    mt-4
    mb-2
    text-lg
    font-medium
    hover:underline
    transition-all
    duration-300
  "
>
  ← Back to Home
</Link>
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/sign-up-logo.png"
          alt="Logo"
          width={130}
          height={130}
        />
      </div>

      {/* Headings */}
      <section
        className={`${instrumentSerif.className} leading-relaxed text-center`}
      >
        <h2 className="text-2xl md:text-4xl">
          Start your Personalised Journey today!
        </h2>

        <h1 className="text-4xl md:text-6xl">
          Create your account!
        </h1>
      </section>

      {/* Form */}
      <div className="mt-6 max-w-md w-full">
        {/* Full Name */}
        <label
          className={`${instrumentSerif.className} block mb-2 text-xl md:text-2xl`}
        >
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="
            w-full
            rounded-xl
            border
            border-blue-900
            p-2
            mb-3
            bg-white
            placeholder:text-blue-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            transition-all
            duration-300
          "
        />

        {/* Email */}
        <label
          className={`${instrumentSerif.className} block mb-2 text-xl md:text-2xl`}
        >
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-blue-900
            p-2
            mb-3
            bg-white
            placeholder:text-blue-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            transition-all
            duration-300
          "
        />

        {/* Password */}
        <label
          className={`${instrumentSerif.className} block mb-2 text-xl md:text-2xl`}
        >
          Password
        </label>

        <input
          type="password"
          placeholder="Create a password"
          className="
            w-full
            rounded-xl
            border
            border-blue-900
            p-2
            mb-4
            bg-white
            placeholder:text-blue-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            transition-all
            duration-300
          "
        />
      </div>

      {/* Create Account Button */}
      <div className="transition-transform duration-300 hover:scale-110">
        <Link href="#">
          <Image
            src="/create-acc-button.png"
            alt="Create Account"
            width={180}
            height={60}
          />
        </Link>
      </div>

      {/* Login Link */}
      <div
        className={`${instrumentSerif.className} mt-3 text-center text-xl md:text-2xl`}
      >
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold hover:underline"
        >
          LOGIN HERE
        </Link>
      </div>

      {/* Google Section */}
      <div className="mt-4 flex flex-col items-center">
        <p
          className={`${instrumentSerif.className} text-xl md:text-2xl`}
        >
          Or Sign up with Google
        </p>

        <div className="transition-transform duration-300 hover:scale-110">
          <Link href="#">
            <Image
              src="/google-auth-button.png"
              alt="Google Auth"
              width={220}
              height={70}
            />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 mb-4 text-sm text-blue-900">
        © 2026 Cliero • Built for students
      </footer>
    </main>
  );
}