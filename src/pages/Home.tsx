import About from '../sections/About/About';
import Contact from '../sections/Contact/Contact';
import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';

export default function Home() {
  return (
    <main className="relative z-10 pt-16 overflow-y-auto">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
