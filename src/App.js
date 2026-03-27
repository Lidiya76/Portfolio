import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="navbar">
  <div className="nav-left"></div> 
  <div className="nav-right">
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#ai">AI</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

      <Home />
    </>
  );
}

export default App;