import { useEffect,useState } from "react";
import Select from "react-select";
import { FaGithub, FaAmbulance, FaShoppingCart, FaGraduationCap, FaChartLine, FaTools } from "react-icons/fa";

import './styles.css';
import Cers from "./featured-projects/Cers";
import TechConsultant from "./featured-projects/TechConsultant";


const featuredProjects = [
  {
    icon: <FaAmbulance />,
    title: 'CERS',
    intro: 'Fast campus alerting sys',
  },
  {
    icon: <FaTools />,
    title: 'Tech Consultant',
    intro: '"What we do" platform',
  },
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#1c1c1c",
    border: "1px solid #444",
    borderRadius: "8px",
    minHeight: "45px",
    boxShadow: "none",
    color: "#fff",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#2a2a2a",
    borderRadius: "8px",
    padding: "0.3rem",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#333" : "transparent",
    color: "#fff",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#bbb",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  valueContainer: (base) => ({
    ...base,
    backgroundColor: "#1c1c1c",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#fd4312",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const projectComponents = {
  'CERS': <Cers />,
  'Tech Consultant': <TechConsultant />,
};

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState('CERS');

  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);

  const handleProjectClick = (projectTitle) => {
    setSelectedProject(projectTitle);
  };

  const selectOptions = featuredProjects.map((project, index) => ({
    value: project.title,
    label: (
      <div className="custom-option-wrapper">
        <div className={`custom-option-icon color-${index % 4}`}>{project.icon}</div>
        <div className="custom-option-text">
          <span className="custom-option-title">{project.title}</span>
          <span className="custom-option-intro">{project.intro}</span>
        </div>
      </div>
    )
  }));

  useEffect(() => {
          const mediaQuery = window.matchMedia("(max-width: 768px)");
  
          const handleMediaChange = (e) => {
              setIsMobile(e.matches);
          };
  
          // Set initial value
          setIsMobile(mediaQuery.matches);
  
          // Listen to changes
          mediaQuery.addEventListener("change", handleMediaChange);
  
          return () => mediaQuery.removeEventListener("change", handleMediaChange);
      }, []);

  return (
    <section className="section-body" id="projects">
      <div className="projects-top">
        <div className="projects-left">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">{!isMobile ? "Featured Projects | Selected Highlights" : "Featured Projects"}</p>
        </div>

        <div className="projects-right">
          {!isMobile ? <p className="projects-count">8+ <br /> Projects</p> : <p className="projects-count">8+ Projects</p>}
          <a href="https://github.com/leonardogendo/" target="_blank" rel="noopener noreferrer" className="github-button">
            <FaGithub /> See GitHub
          </a>
        </div>
      </div>

      <div className="projects-body">
        {/* Mobile Dropdown */}
        <div className="projects-mobile-dropdown">
          <Select
            options={selectOptions}
            value={selectOptions.find(opt => opt.value === selectedProject)}
            onChange={(option) => handleProjectClick(option.value)}
            isSearchable={false}
            styles={customStyles}
          />
        </div>

        {/* Sidebar for desktop/tablet */}
        <div className="projects-sidebar">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => handleProjectClick(project.title)}>
              <div className={`project-icon-wrapper color-${index % 4}`}>
                {project.icon}
              </div>
              <div className="project-card-label">
                <span>{project.title}</span>
                <p>{project.intro}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-main">
          {projectComponents[selectedProject]}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
