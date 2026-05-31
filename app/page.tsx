import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/whatiscliero"
import Features from "@/components/features"
import WhyChoose from "@/components/whycliero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/footer";

export default function Home() {
    return(
        <main>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <WhyChoose />
            <FinalCTA />
            <Footer />
        </main>

    );
}
