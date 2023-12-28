import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" id={theme}>
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
