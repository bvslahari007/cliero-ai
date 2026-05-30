import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/whatiscliero"
import Features from "@/components/features"

export default function Home() {
    return(
        <main>
            <Navbar />
            <Hero />
            <About />
            <Features />
        </main>

    );
}
