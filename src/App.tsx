import About from "./components/about";
import Education from "./components/education";
import Header from "./components/header";
import Projects from "./components/projects";
import Tech from "./components/tech";

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mx-8">
        <About />
        <Tech />
        <Projects />
        <Education />
      </div>
    </>
  )
}