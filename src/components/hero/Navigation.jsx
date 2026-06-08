import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faLaptopCode, faStar, faPhone, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FaCode, FaBars ,FaDotCircle, FaUserShield, FaTools, FaLaptopCode as FaSoftEng, FaShieldAlt, FaTerminal, FaTimes } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';

import './styles.css';
import TypewriterEffect from "./TypewriterEffect";
import backgroundVideo from '../../assets/video/backgroundplay.mp4';
import backgroundImage from '../../assets/backgrounds/box-rule3-bg.jpg';

function Navigation(){
    const texts = [
        "I Am Leonard Ogendo",
        'Secure Software & Cybersecurity Engineer',
        'I Build & Secure Modern Applications',
        'Application Security • DevSecOps • Security Testing',
        'I Help Teams Ship Secure Software'
    ];

    // CURRENT ROLE
    const currentRole = "Software Engineer @ Afristec Ltd.";
    
    // State to track portfolio tag
    const [isSoftware, setIsSoftware] = useState(true);
    const [fade, setFade] = useState(true);

    // State to track if the user has scrolled
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';   // Prevent background scroll
        } else {
            document.body.style.overflow = 'auto';     // Restore scroll
        }

        return () => {
            document.body.style.overflow = 'auto';     // Cleanup in case component unmounts
    };
    }, [menuOpen]);


    // State to toggle Portfolio tag
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setIsSoftware((prev) => !prev);
                setFade(true); // Start fading in
            }, 1000);
        }, 3500); 

        return () => clearInterval(interval); 
    }, []);





    return(
        <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
            <nav>
                <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
                    <a href="#home"><span id="nav-brand">Leonard Ogendo</span></a>

                    <div onClick={toggleMenu} className="menu-button">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul>
                        <li>
                            <a href="#home" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                                <div className="name-box"><span>Home</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faUser} className="fa-ico" /></div>
                                <div className="name-box"><span>About</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} className="fa-ico" /></div>
                                <div className="name-box"><span>Skills</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#experiences" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faProjectDiagram} className="fa-ico" /></div>
                                <div className="name-box"><span>Experience</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} className="fa-ico" /></div>
                                <div className="name-box"><span>Projects</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#certificates" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                                <div className="name-box"><span>Certificates</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                                <div className="name-box"><span>Contact</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1Cy46WQCrpm-0v2eoX1MY4qURjsAD4J0g/view?usp=sharing" target="_blank" rel="noreferrer" id="download-cv" className="nav-link">
                                <span>Download CV</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <a href="#home" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                        <span>Home</span>
                    </a>
                    <a href="#about" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faUser} className="fa-ico" /></div>
                        <span>About</span>
                    </a>
                    <a href="#skills" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} className="fa-ico" /></div>
                        <span>Skills</span>
                    </a>
                    <a href="#experiences" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faProjectDiagram} className="fa-ico" /></div>
                        <span>Experience</span>
                    </a>
                    <a href="#projects" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} className="fa-ico" /></div>
                        <span>Projects</span>
                    </a>
                    <a href="#certificates" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                        <span>Certificates</span>
                    </a>
                    <a href="#contact" className="nav-link" onClick={toggleMenu}>
                        <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                        <span>Contact</span>
                    </a>
                    
            
                </div>

            </nav>

            {/* Portfolio tag */}
            {!menuOpen && (
                <span className={`se-tag ${fade ? 'fade-in' : 'fade-out'}`}>
                    {isSoftware ? "Software Engineer Portfolio" : "Cybersecurity Specialist Portfolio"}
                </span>
            )}

            <div className="hero">
                <div className="intro">
                    <p className="name">Leonard Ogendo</p>

                    <p className="gen-title">Secure Software & Cybersecurity Engineer</p>
                    
                    <div className="status">
                        <FaDotCircle className="status-dot" /> 
                        <p className="c-at">{currentRole}</p>
                    </div>

                    <p className="zing">Helping Organizations Build Secure Systems, Protect Digital Assets & Critical Infrastructure</p>

                    <div className="hero-btns">
                        <a href="#projects"><button className="view-btn"><FaCode className="btn-icon" /> View My Work</button></a>
                        <a href="#contact"><button className="contact-btn"><BsSend className="btn-icon" /> Get In Touch</button></a>
                    </div>

                    { !isMobile && (
                        <p className="hero-tech">
                            <FaCode className="code-icon" /> Tech Stack:
                            <span id="f-span">Java</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>Spring Boot</span>
                            <span>Node.js</span>
                            <span>React</span>
                            <span>Angular</span>
                            <span>+5 more</span>
                        </p>
                    )}
                </div>

                <div className="type-wrap">
                    <div className="typewriter-area">
                        <video autoPlay muted loop playsInline>
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                        <div className="typewriter">
                            <TypewriterEffect texts={texts} />
                        </div>
                        <div className="gradient-overlay"></div>
                    </div>
                    
                    {!isMobile ? (
                        <div className="expertise">
                            <div className="hv-block">
                                <FaSoftEng className="exp-ico" size={18} />
                                <span>Secure Software Engineering</span>
                            </div>
                            <div className="hv-block">
                                <FaShieldAlt className="exp-ico" size={18} />
                                <span>Application Security</span>
                            </div>
                            <div className="hv-block">
                                <FaUserShield className="exp-ico" size={18} />
                                <span>Security Testing</span>
                            </div>
                            <div className="hv-block">
                                <FaTools className="exp-ico" size={18} />
                                <span>Security Automation</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="expertise">
                                <div className="hv-block">
                                    <FaSoftEng className="exp-ico" size={18} />
                                    <span>Software Engineering</span>
                                </div>
                                <div className="hv-block">
                                    <FaUserShield className="exp-ico" size={18} />
                                    <span>Application Security</span>
                                </div>
                                <div className="hv-block">
                                    <FaTools className="exp-ico" size={18} />
                                    <span>Security Testing</span>
                                </div>
                            
                            </div>
                            <p className="hero-tech">
                                <span>Java</span>
                                <span>Python</span>
                                <span>JavaScript</span>
                                <span>Spring Boot</span>
                                <span>Node.js</span>       
                            </p>
                        </>
                    )
                    }
                </div>
            </div>
        </section>
    );
}

export default Navigation;
