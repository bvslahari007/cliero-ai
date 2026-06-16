import Image from "next/image";
import { instrumentSerif } from "@/app/fonts";

export default function Loading() {
  return (
    <div className="bg-white-500/50 flex min-h-screen flex-col items-center justify-center bg-white">
      <Image
        src="/hero-main-image.png"
        alt="Cliero"
        width={200}
        height={200}
        className="animate-pulse"
      />

      <p className={`${instrumentSerif.className} mt-4 text-3xl text-blue-900`}>
        Getting everything ready...
      </p>
      <footer>
        <p className={`${instrumentSerif.className} text-lg text-blue-900/60`}>
          © 2026 Cliero AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}