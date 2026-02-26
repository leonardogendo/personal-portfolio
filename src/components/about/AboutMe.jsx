import React, { useState, useEffect } from "react";
import profilePhoto from '../../assets/portfolio-user.png';
import TopPerformerCard from "../../shared/components/TopPerformerCard";
import SecureCodeCard from "../../shared/components/SecureCodeCard";
import './styles.css';

const AboutMe = () => {

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
                        <span className="work-st">Freelancer</span>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <div className="readme">
                        <div id="underline"></div>
                        <p className="pro-name">Leonard Ogendo</p>
                        <p className="pro-title">Secure Software & Cybersecurity Engineer</p>

                        <p className="pro-desc">
                            I'm an early-career Secure Software Engineer and Cybersecurity Specialist, focused on Secure SDLC, AI-Augmented Cyber Defense/Offense, 
                            Application Security and DevSecOps. <br /> <br />
                            My aim is to support organizations in both public and private sectors to build secure systems (web & mobile apps) , ensure their security 
                            and reliability, and mitigate cyber risks to protect data, digital assets, and critical infrastructure in today's constantly evolving cyber 
                            threat landscape.
                        </p>
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