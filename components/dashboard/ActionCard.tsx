import Link from "next/link";
import { interTight } from "@/app/fonts";
import { ReactNode } from "react";

export default function ActionCard({title, description, link, icon }: {title: string, description: string, link: string, icon?: ReactNode}) {
    return(
        <div className={`${interTight.className} space-y-3 rounded-2xl text-xl border border-white bg-blue-100 p-5 backdrop-blur-sm shadow-md duration-300  hover:shadow-lg text-blue-900 hover:-translate-y-1`}>
            {icon}
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-500 mt-2">{description}</p>
            <Link href={link} className="text-sm text-blue-800 hover:text-blue-900 mt-4 inline-block">Go to {title} → </Link>
        </div>
    );
} 