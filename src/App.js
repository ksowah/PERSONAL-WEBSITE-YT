import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="bg-[#080808] w-screen min-h-screen">
      <Header />
      <Banner />
      <ProjectsSection />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
