import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ContactPage from "@/components/contact/ContactPage";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Projects/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}
