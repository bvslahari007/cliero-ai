import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";

export default function WelcomeSection(){
    return(
        <section className="grid-bg py-10 px-10 bg-blue-100 p-10">
            <p className={`${instrumentSerif.className} mt-4 text-3xl font-bold text-blue-900`}>
                Learn smarter today
            </p>

            <h1 className={`${interTight.className} mt-2 text-3xl md:text-4xl font-bold text-blue-900`}>
                Good Afternoon, Lahari</h1>
            <p className={`${instrumentSerif.className} mt-3 max-w-2xl text-gray-500 text-2xl`}>
                Ready to clear the cloudy bits? Pick a tool below,
                or jump back into something you were working on.
            </p>
        </section>
    );
}