"use client";
import Image from "next/image";
import { instrumentSerif } from "@/app/fonts";
import { useEffect, useState} from "react"
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function ChooseDomain() {
  const [domain, setDomain] = useState("");
  const router = useRouter();
  
  useEffect(() => {
  checkProfile();
}, []);

async function checkProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("profiles")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (data) {
    router.push("/dashboard");
  }
}

  async function handleContinue(){
    if (!domain){
      alert("Please select a field");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user){
      alert("Please login again");
      return;
    }
    console.log(user);
    console.log(domain);

    const profileData = {
  user_id: user.id,
  full_name:
  user.user_metadata.full_name ||
  user.user_metadata.name,
  domain,
};

console.log("PROFILE DATA:", profileData);

const { data, error } = await supabase
  .from("profiles")
  .insert(profileData);

console.log(data);
console.log(error);

    if (error) {
  console.log("FULL ERROR:", error);
  if (error?.code === "23505") {
  alert("Profile already exists. Redirecting to dashboard...");
  router.push("/dashboard");
  return;
}
  return;
}
alert("Profile created successfully!");
router.push("/dashboard");
  }
  
    

  return (
    <main
      className="
        min-h-screen
        px-2
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
      {/* Logo */}
      <div className="mt-2">
        <Image
          src="/sign-up-logo.png"
          alt="Cliero AI"
          width={220}
          height={100}
        />
      </div>

      {/* Subtitle */}
      <p
        className={`${instrumentSerif.className}
        text-3xl md:text-4xl
        text-center
        mt-0
        max-w-4xl`}
      >
        Time to understand things,
        not just mug them up
      </p>

      {/* Main Heading */}
      <h1
        className={`${instrumentSerif.className}
        text-4xl md:text-6xl
        text-center
        mt-14`}
      >
        What field are you studying?
      </h1>

      {/* Description */}
      <p
        className={`${instrumentSerif.className}
        text-xl md:text-2xl
        mt-6
        text-center`}
      >
        Choose your primary field of study
      </p>

      {/* Dropdown */}
      <div className="mt-8 w-full max-w-xl">
        <select value={domain}
        onChange={(e) => setDomain(e.target.value)}
          className={`${instrumentSerif.className}
            w-full
            p-3
            rounded-3xl
            border-2
            border-blue-300
            bg-blue-50
            text-blue-900
            text-lg
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            transition-all
            text-xl
            font-medium
          `}
        >
          <option value="">Select your field</option>
          <option value="Computer Science">
            Computer Science
          </option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Data Science">
            Data Science
          </option>
          <option value="Mathematics">
            Mathematics
          </option>
          <option value="Physics">
            Physics
          </option>
          <option value="Chemistry">
            Chemistry
          </option>
          <option value="Electronics">
            Electronics
          </option>
          <option value="Humanities">
            Humanities
          </option>
          <option value="Law">
            Law
          </option>
          <option value="Other">
            Other
          </option>
        </select>
      </div>

      {/* Note */}
      <p
        className={`${instrumentSerif.className}
        mt-2
        text-center
        text-lg`}
      >
        More domains will be added soon!
      </p>

      {/* Continue Button */}
      <button onClick={handleContinue}>
        <Image className="transition-transform duration-300 hover:scale-110 mt-3"
          src="/on-boarding-continue.png"
          alt="Create Account"
          width={180}
          height={60}
        />
      </button>
      {/* Footer */}
      <footer className="mb-4 text-sm text-blue-900 pt-14">
        © 2026 Cliero • Built for students
      </footer>
    </main>
  );
}