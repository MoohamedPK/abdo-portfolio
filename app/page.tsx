import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
