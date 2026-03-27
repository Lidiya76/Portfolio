import myPhoto from "../assets/Lidiya.jpg";
import "./Projects.css";
function Home() {
  return (
    <div>

  <section id="home" className="home-top">
  <img src={myPhoto} alt="Lidiya" className="profile-photo-large" />

  <h1>Hello, I'm Lidiya</h1>

  <p>
    Aspiring Software Engineer transitioning from business development and retail, with hands-on experience in full-stack development. 
    Completed the NPower Path2Tech program and actively use AI tools to enhance learning, problem-solving, and coding efficiency.
  </p>

  <a 
    href="/Lidiya_Resume.pdf" 
    download 
    className="resume-button"
  >
    Download Resume
  </a>
  </section>
  {/*Project section*/}
<section id="projects" className="projects-section">
  <h2>Projects</h2>

  <div className="projects-grid">

    {/* WEATHER APP */}
    <div className="project-card">
      <img 
        src="/weather-preview.png" 
        alt="Weather App Preview" 
        className="project-image"
      />
      <h3>Weather App</h3>
      <p>
        A responsive React application that fetches real‑time weather data using the OpenWeather API.
        Users can search any city and instantly view temperature, conditions, and weather details.
        Built during the NPower Path2Tech program to strengthen API integration and UI design skills.
      </p>
      <ul className="tech-tags">
        <li>React</li>
        <li>JavaScript</li>
        <li>OpenWeather API</li>
        <li>CSS</li>
      </ul>
      <div className="project-links">
  <a 
    href="https://weather-project-8fvd.onrender.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-link"
  >
    Live Demo
  </a>

  <a 
    href="https://github.com/Lidiya76/weather_project/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-link"
  >
    View Code
  </a>
</div>
    </div>

    {/* CLIENT MANAGEMENT SYSTEM */}
    <div className="project-card">
      <img 
        src="/client-management-preview.png" 
        alt="Client Management System Preview" 
        className="project-image"
      />
      <h3>Client Management System</h3>
      <p>
        A full‑stack CRUD application for managing client information built with React, Node.js, Express, and MongoDB.
        Features include adding, editing, and deleting clients with persistent data storage.
        Developed to practice backend routing, database integration, and CRUD operations.
      </p>
      <ul className="tech-tags">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>CRUD</li>
      </ul>
      <a 
    href="https://github.com/Lidiya76/client_management" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-link"
  >
    View Code
  </a>
    </div>

  </div>
</section>

      <section id="about" className="about-section">
  <h2>About Me</h2>
  <div className="about-container">
    <p>
      I’m Lydia, a self-taught software developer with a background in business development and a strong passion for learning and problem-solving. 
      My experience working closely with clients and internal teams sparked my interest in technology and how software can solve real-world problems.
      I recently transitioned into tech, building my skills through self-learning and completing the NPower training program, 
      where I gained hands-on experience in full-stack development. Through this program, I developed practical skills in building web applications, 
      collaborating with peers, and applying problem-solving techniques in real-world scenarios.
      I also use AI tools as part of my development workflow to support learning, improve efficiency, 
      and explore different approaches to problem-solving while maintaining a strong understanding of core concepts.
I’m now seeking an opportunity to grow as a software engineer, contribute to meaningful projects, 
and continue learning in a collaborative and innovative environment.
    </p>
  </div>
</section>

      <section id="ai" className="ai-section">
  <h2>How I Use AI</h2>

  <div className="ai-container">
    <p>
      I use AI as a supportive tool to enhance my learning and productivity in tech. 
      It helps me explore ideas, clarify concepts, and streamline repetitive tasks so 
      I can focus on problem‑solving and building meaningful projects.
    </p>

    <ul className="ai-list">
      <li>
        <strong>Learning and research:</strong> summarizing documentation, breaking down 
        complex topics, and helping me quickly understand new programming concepts.
      </li>
      <li>
        <strong>Project planning:</strong> brainstorming features, structuring workflows, 
        and refining project ideas before I start building.
      </li>
      <li>
        <strong>Code assistance:</strong> suggesting solutions, providing examples, and 
        helping debug while I stay fully in control of the implementation.
      </li>
    </ul>

    <p>
      I regularly use tools like ChatGPT and GitHub Copilot, but I always prioritize 
      applying my own judgment, creativity, and technical skills to every project.
    </p>
  </div>
</section>

      <section id="contact" className="contact-section">
  <h2>Contact</h2>

  <div className="contact-container">
    <p>If you'd like to connect, collaborate, or learn more about my work, feel free to reach out.</p>

    <ul className="contact-list">
      <li><strong>Email:</strong> lidiya.girmae@gmail.com</li>
      <li>
        <strong>GitHub:</strong> 
        <a href="https://github.com/Lidiya76" target="_blank" rel="noopener noreferrer">
          https://github.com/Lidiya76
        </a>
      </li>
      <li>
        <strong>LinkedIn:</strong> 
        <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
          https://www.linkedin.com/in/lidiya-alemayehu-476828197/
        </a>
      </li>
    </ul>
  </div>
</section>
    </div>
  );
}

export default Home;