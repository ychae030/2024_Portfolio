import About from "./section/about/About";
import Hero from "./section/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-2xl mx-auto">
        <About />
      </div>
    </main>
  );
}
