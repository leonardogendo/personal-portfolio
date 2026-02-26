import { useRef, useEffect, useState } from 'react';

import './styles/App.css';
import './styles/styles.css';

import Navigation from "./components/hero/Navigation";
import AboutMe from "./components/about/AboutMe";
import TechnicalSkills from './components/technical-skills/Technical Skills';
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
                    entry.target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
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
            // Re-enable after short delay
            setTimeout(() => setRecentlyNavigated(false), 1000); // 1 second should be enough
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
