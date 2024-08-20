import Hero from "@/components/Hero";
import Collaborations from "@/components/Collaborations";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col items-center">
      <section id="hero"><Hero/></section>
      <section id="collaborations"><Collaborations/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="work"><Work/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="contact"><Contact/></section>
    </main>
  );
}