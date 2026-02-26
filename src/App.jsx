import { useRef, useEffect, useState } from 'react';

import './styles/App.css';
import './styles/styles.css';

import Navigation from "./components/hero/Navigation";
import AboutMe from "./components/about/AboutMe";
import TechnicalSkills from './components/technical-skills/TechnicalSkills';
import Experiences from './components/experiences/Experiences';
import MyProjects from './components/projects/MyProjects';
import MyCertificates from "./components/certificates/MyCertificates";
import Contact from "./components/footer-area/Contact";
import Footer from "./components/footer-area/Footer";

function App() {
    const [recentlyNavigated, setRecentlyNavigated] = useState(false);

    const skillsRef = useRef(null);
    const experienceRef = useRef(null);



    useEffect(() => {
        const options = {
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            if (recentlyNavigated) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Calculate navbar offset for fixed positioning
                    const navbar = document.querySelector('.nav-bar.scrolled');
                    const navbarHeight = navbar ? navbar.offsetHeight + 10 : 90; // 80px fallback + 20px buffer
                    
                    // Get the element's position and scroll with navbar offset
                    const elementPosition = entry.target.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }, options);

        if (skillsRef.current) observer.observe(skillsRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);

        return () => observer.disconnect();
    }, [recentlyNavigated]);

    // Detect anchor clicks
    useEffect(() => {
        const handleHashChange = () => {
            setRecentlyNavigated(true);
            
            // Handle smooth scrolling to hash with navbar offset
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    // Calculate navbar offset for fixed positioning
                    const navbar = document.querySelector('.nav-bar.scrolled');
                    const navbarHeight = navbar ? navbar.offsetHeight + 10 : 90; // 80px fallback + 20px buffer
                    
                    // Get the element's position and scroll with navbar offset
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight;
                    
                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100); // Small delay to ensure DOM is ready
                }
            }
            
            // Re-enable after short delay
            setTimeout(() => setRecentlyNavigated(false), 1000);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    
    return (
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />

                <section
                    id="skills"
                    ref={skillsRef}
                    className="full-screen-section"
                >
                    <TechnicalSkills />
                </section>

                <section
                    id="experience"
                    ref={experienceRef}
                    className="full-screen-section"
                >
                    <Experiences />
                </section>

                <MyProjects />
                <MyCertificates />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}


export default App;
