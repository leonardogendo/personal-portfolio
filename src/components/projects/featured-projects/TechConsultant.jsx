import projectImage from '../../../assets/certsxprojects/consultancy.png'; 
import { FaDotCircle, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const TechConsultant = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">Tech Consultant Platform</h2>

            <div className="project-brief-container">
                <p className="project-brief">A corporate platform built for a client organization to showcase tech consulting services.</p>
                <div className="project-tags">
                    <span className="tag creation">Client Work</span>
                    <span className="tag level">Professional</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">SCSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">HTML5</span>
                <span className="tech-badge">CSS3</span>
            </div>

             <div className="view-project">
                <a href="https://github.com/leonardogendo/Tech-Consultancy-Website" target="_blank" rel="noopener noreferrer" ><span className='view-code'><FaGithub className="view-icon" /> View Code</span>  </a>
                <a href="https://amden.co.ke/" target="_blank" rel="noopener noreferrer" ><span className='view-demo'><FiExternalLink className="view-icon" /> Live Demo</span></a>
            </div>

            <div className="project-section">
                <h3><FaProjectDiagram className="overview-icon" /> Overview</h3>
                <p>
                    The Tech Consultant platform was designed to serve as a modern digital presence for a tech advisory firm. It features interactive service listings, a sleek responsive UI, smooth scroll animations, client inquiry integration with EmailJS, and a conversion-optimized contact section. The project was delivered with scalability and future blog support in mind.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="Tech Consultant Platform Screenshot" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Services showcase with icons and transitions</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Responsive layout for all device sizes</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Smooth scroll-based UI animations</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Real-time contact form with EmailJS</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Meeting high visual expectations under time constraints</p>
                    <p><FaDotCircle className="bullet-icon" /> Ensuring mobile friendliness without compromising design</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Leveraged Bootstrap for quick yet stunning UI</p>
                    <p><FaDotCircle className="bullet-icon" /> Mobile-first design and careful component responsiveness</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>Completed</strong></span>
            </div>
        </div>
    );
};

export default TechConsultant;
