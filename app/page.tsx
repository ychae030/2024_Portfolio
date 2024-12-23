import Footer from "./components/Footer";
import About from "./section/about/About";
import Hero from "./section/hero/Hero";
import Projects from "./section/projects/Projects";

export default function Home() {
  return (
    <>
      <main className="px-14">
        <Hero />
        <div className="max-w-screen-2xl mx-auto">
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
