import { useState } from "react";
import CurrentRole from "./categories/CurrentRole";
import PreviousExperiences from "./categories/PreviousExperiences";
import { FaStar } from "react-icons/fa";
import './styles.css';


const Experiences = () => {
    
    const [activeToggle, setActiveToggle] = useState("current-role");

    const handleToggleClick = (toggle) => {
        setActiveToggle(toggle);
    };


    return (
        <section className="section-body" id="experiences">
            <div className="bordered-header">
                <h2 className="section-title">
                    <span style={{ color: "#fff" }}>My</span>{" "}
                    <span style={{ color: "#fd4312" }}>Experiences</span>
                </h2>

                <p className="section-subtitle">
                    Roles I've held and experiences that have shaped my professional journey.
                </p>
            </div>

            <div className="experiences-hls">
                <div className="experience-toggles">
                    <div onClick={() => handleToggleClick("current-role")} className="experience-toggle" style={ activeToggle === "current-role" ? { backgroundColor: "#2F242C"} : {backgroundColor: "#2a2a2a"} } >Current Role</div>
                    <div onClick={() => handleToggleClick("previous-experiences")} className="experience-toggle" style={ activeToggle === "previous-experiences" ? { backgroundColor: "#2F242C"} : {backgroundColor: "#2a2a2a"} }>Previous Experiences</div>
                </div>
                
                <div className="experiences-count"><FaStar className="exp-icon" />6 + Experiences</div>
        
            </div>

            <div className="experience-content">
                {activeToggle === "current-role" && <CurrentRole />}
                {activeToggle === "previous-experiences" && <PreviousExperiences />}
            </div>
        </section>
    );
};

export default Experiences;
