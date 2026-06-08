
import projectImage from '../../../assets/certsxprojects/cers.png';
import { FaDotCircle, FaGithub, FaProjectDiagram, } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Cers = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">CERS</h2>

            <div className="project-brief-container">
                <p className="project-brief">A platform that connects students with campus emergency responders <br /> in real-time.</p>
                <div className="project-tags">
                    <span className="tag creation">Creation</span>
                    <span className="tag level">Advanced</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">DRF</span>
                <span className="tech-badge">Django</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">PostgreSQL</span>
            </div>

            <div className="view-project">
                <a href='https://github.com/LeonardOgendo/CERS' target='_blank' rel="noopener noreferrer" ><span className='view-code'><FaGithub className="view-icon" /> View Code</span></a>
                <span style={{ cursor: 'not-allowed' }} className='view-demo'><FiExternalLink className="view-icon" /> Live Demo</span>
            </div>

            <div className="project-section">
                <h3><FaProjectDiagram className="overview-icon" /> Overview</h3>
                <p>
                    CERS is a real-time platform designed to streamline emergency reporting within universities. It allows students & staff to instantly alert campus emergency team, track response times, and access location-based services for faster intervention. The system features a secure backend, user roles, real-time alert broadcasting, and scalable architecture to accommodate large student populations.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="CERS Screenshot" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Instant Emergency reporting</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Real-time Emergency alerts</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Geolocation tracking</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Secure login & role access</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Admin dashboard for responders</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Ensuring accuracy and determining shortest route to emergency scene</p>
                    <p><FaDotCircle className="bullet-icon" /> Managing secure and scalable backend authentication</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Add associated local addresses to student areas alongside coordinates</p>
                    <p><FaDotCircle className="bullet-icon" /> Implemented JWT-based access and rate-limiting middleware</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>In Progress</strong></span>
            </div>
        </div>
    );
};

export default Cers;
