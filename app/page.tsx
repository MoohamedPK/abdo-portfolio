import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ContactPage from "@/components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my lens where light, emotion, and creativity come to life. Explore my photography portfolio and creative work.",
  openGraph: {
    title: "Abderrahmane - Photography Portfolio",
    description:
      "Welcome to my lens where light, emotion, and creativity come to life. Explore my photography portfolio and creative work.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}
