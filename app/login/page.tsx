"use client";
import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/app/fonts";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

async function handleLogin() {
  if (!email.trim() || !password.trim()) {
    alert("Please fill all fields");
    return;
  }

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  console.log(data);

if (data.user) {
  await redirectUser(data.user.id);
}
}

async function handleGoogleAuth() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  });

  if (error) {
    alert(error.message);
  }
}

async function redirectUser(userId: string){
  const { data } = await supabase
  .from("profiles")
  .select("*")
  .eq("user_id", userId)
  .maybeSingle();

  if (data) {
    router.push("/dashboard");
  } else {
    router.push("/choose");
  }
}

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
      <div className="flex justify-center mt-2">
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
          Time to understand things, 
          not just mug them up
        </h2>

        <h1 className="text-4xl md:text-6xl">
            Welcome back!        </h1>
      </section>

      {/* Form */}
      <div className="mt-6 max-w-md w-full">

        {/* Email */}
        <label
          className={`${instrumentSerif.className} block mb-2 text-xl md:text-2xl`}
        >
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
  <button onClick={handleLogin}>
    <Image
      src="/login-button.png"
      alt="Login"
      width={180}
      height={60}
    />
  </button>
</div>

      {/* Login Link */}
      <div
        className={`${instrumentSerif.className} mt-3 text-center text-xl md:text-2xl`}
      >
        New Here?{" "}
        <Link
          href="/signup"
          className="font-bold hover:underline"
        >
          CREATE YOUR ACCOUNT HERE
        </Link>
      </div>

      {/* Google Section */}
      <div className="mt-4 flex flex-col items-center">
        <p
          className={`${instrumentSerif.className} text-xl md:text-2xl`}
        >
          Or Login with Google
        </p>

        <div className="transition-transform duration-300 hover:scale-110">
          <button onClick={handleGoogleAuth}>
  <Image
    src="/google-auth-button.png"
    alt="Google Auth"
    width={220}
    height={70}
  />
</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 mb-4 text-sm text-blue-900">
        © 2026 Cliero • Built for students
      </footer>
    </main>
  );
}