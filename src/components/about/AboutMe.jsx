import React, { useState, useEffect } from "react";
import profilePhoto from '../../assets/portfolio-user.png';
import TopPerformerCard from "../../shared/components/TopPerformerCard";
import SecureCodeCard from "../../shared/components/SecureCodeCard";
import './styles.css';

const AboutMe = () => {

    const miniRole = 'Engineer';

    const aboutMe = {
        // PartA: min 20 words - max 22 words
        partA: 
            `I build and secure modern applications, APIs, and delivery pipelines to help
            organizations protect their systems from real-world cyber threats.`
        ,
        partB: 
            `With practical experience in Secure Software Engineering, DevSecOps Integration, and automated
            security testing, I:`
        ,
        bulletOne: `Design secure systems from development through to deployment`,
        bulletTwo: `Embed security into CI/CD pipelines with DevSecOps automation`,
        bulletThree: `Validate vulnerabilties(Web & API) through both manual and automated testing`,
        bulletFour: `Improve monitoring and detection using SIEM insights and security workflows`
    };

    const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);

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
        <div id="about" className="section-body">
           
           {!isMobile ? (
            <div className="about-container">
                 <div className="vertical-line"></div>
                <div className="about-content-wrapper">
                    <TopPerformerCard />
                    <SecureCodeCard />
                    <div className="photo-container">
                        <span className="work-st">{ miniRole }</span>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <div className="readme">
                        <h2>Hi, I'm</h2>
                        <div id="underline"></div>
                        <p className="pro-name">Leonard Ogendo</p>
                        <p className="pro-title">Secure Software & Cybersecurity Engineer</p>

                        <div className="pro-desc">
                            { aboutMe.partA } <br /> <br />
                            { aboutMe.partB }
                        
                            <ul>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletOne}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletTwo}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletThree}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletFour}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ): (
                <div className="about-container">
                    <div style={{ display: 'flex' }}>
                        <div className="vertical-line"></div>
                        <div className="photo-container">
                            <span className="work-st">Freelancer</span>
                            <img src={profilePhoto} alt="profile" />
                        </div>
                    </div>
                    
                    <div className="about-content-wrapper">
                        <TopPerformerCard />
                        <SecureCodeCard />
                        <div className="readme">
                            <div id="underline"></div>
                            <p className="pro-name">Leonard Ogendo</p>
                            <p className="pro-title">Secure Software & Cybersecurity Engineer </p>

                            <p className="pro-desc">I’m a Junior Secure Software Engineer actively building deep expertise in Secure SDLC, Web & Mobile Application Security, 
                                and Cybersecurity Engineering — across Penetration Testing and Blue Team Operations (SOC).
                                <br />With a strong command of Python and JavaScript, I build and secure modern applications — from the codebase to the cloud. 
                                My unique advantage lies in blending software engineering and security practices into one unified discipline, allowing me to design and implement 
                                systems that are resilient by design.
                                I’m currently focused on understanding how systems break, and building them so they don’t.</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AboutMe