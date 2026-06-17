"use client";


import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function WelcomeSection(){
    const [fullName, setFullName] = useState("");
    const firstName = fullName?.trim().split(" ")[0] || "";

    async function fetchProfile() {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data, error } = await supabase
            .from("profiles")
            .select("full_name")
            .eq("user_id", user.id)
            .single();

        if (error) {
            console.log(error);
            return;
        }

        setFullName(data.full_name);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return(
        <section className="py-5 px-10">
            <div className="flex items-center gap-40">
                <div>
            <p className={`${instrumentSerif.className} mt-4 text-3xl font-bold text-blue-900`}>
                Learn smarter today
            </p>

            <h1 className={`${interTight.className} mt-2 text-3xl md:text-4xl font-bold text-blue-900`}>
                Let's make today productive, {firstName || "Learner"}
            </h1>
            <p className={`${instrumentSerif.className} mt-3 max-w-full text-gray-500 text-2xl`}>
                Ready to clear the cloudy bits? Pick a tool below,
                or jump back into something you were working on.
            </p>
            </div>
            <div>
                <Image className="hidden md:block" src="/features-img-2.png" alt="Features" width={230} height={230} /> 
            </div>
            </div>
        </section>
    );
}