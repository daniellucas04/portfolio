import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Tech from "./components/tech";

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mx-8 max-xs-screen:mx-0 max-tablet:mx-0 my-10">
        <About />
        <Tech />
        <Projects />
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}