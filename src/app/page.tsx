import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contacts";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
