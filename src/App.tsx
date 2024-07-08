import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Tech from "./components/tech";
import GitHub from "./components/github/github"

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mx-8 my-10">
        <About />
        <Tech />
        <Projects />
        <GitHub />
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}