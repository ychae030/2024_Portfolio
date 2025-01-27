import CustomCursor from "./components/CustomCursor";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./section/about/AboutPage";
import Hero from "./section/hero/Hero";
import Projects from "./section/projects/Projects";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="px-2 sm:px-14">
        <Hero />
        <div className="max-w-screen-2xl mx-auto">
          <AboutPage />
          <Projects />
        </div>
      </main>
      <Navbar />
      <Footer />
    </>
  );
}
