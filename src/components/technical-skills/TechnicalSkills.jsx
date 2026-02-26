import { useState } from "react";
import Select from "react-select";
import { FaCode, FaCubes, FaServer, FaCloud, FaDatabase, FaVial, FaWpforms, FaTerminal, FaLinux, FaBug, FaShieldAlt, FaLock } from "react-icons/fa";

import './styles.css';
import SLanguages from "./categories/software/Languages";
import Frameworks from "./categories/software/Frameworks";
import DevOps from "./categories/software/DevOpsTools";
import CloudPlatforms from "./categories/software/CloudPlatforms";
import Databases from "./categories/software/Databases";
import TestingTools from "./categories/software/TestingTools";
import Cms from "./categories/software/Cms";

import CLanguages from "./categories/cybersecurity/CLanguages";
import OsAndTools from "./categories/cybersecurity/OsAndTools";
import PenetrationTesting from "./categories/cybersecurity/PenTesting";
import SecurityOperations from "./categories/cybersecurity/SecurityOperations";
import ApplicationSecurity from "./categories/cybersecurity/ApplicationSecurity";


const TechnicalSkills = () => {
    
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




    const sidebarItems = {
        software: [
            { title: "Languages", icon: <FaCode />, intro: "Python, JavaScript, more" },
            { title: "Frameworks & Libraries", icon: <FaCubes />, intro: "Django, React, MERN" },
            { title: "DevOps and Tools", icon: <FaServer />, intro: "GitHub Actions, Docker" },
            { title: "Cloud Platforms", icon: <FaCloud />, intro: "AWS, Vercel, Netlify" },
            { title: "Databases", icon: <FaDatabase />, intro: "MongoDB, PostgreSQL" },
            { title: "Testing Tools", icon: <FaVial />, intro: "Jest, Pytest, Postman" },
            { title: "CMS & Others", icon: <FaWpforms />, intro: "WordPress, Sanity" },
        ],
        cyber: [
            { title: "Languages", icon: <FaTerminal />, intro: "Python, Bash, C" },
            { title: "OS & Tools", icon: <FaLinux />, intro: "Kali Linux, Wireshark" },
            { title: "Penetration Testing/Ethical Hacking", icon: <FaBug />, intro: "Metasploit, Nmap" },
            { title: "Security Operations (Blue Team)", icon: <FaShieldAlt />, intro: "SIEM, Threat Hunting" },
            { title: "Application Security", icon: <FaLock />, intro: "OWASP, Code Reviews" },
        ]
    };

    const [activeTab, setActiveTab] = useState("software");
    const [activeCategory, setActiveCategory] = useState(sidebarItems.software[0].title);

    const [selectedOption, setSelectedOption] = useState({
       label: (
        <div className="dropdown-option-wrapper" >
            <div className="dropdown-option-icon color-0">{sidebarItems[activeTab][0].icon}</div>
            <div className="dropdown-option-label">
                <div className="dropdown-option-title">{sidebarItems[activeTab][0].title}</div>
                <div className="dropdown-option-intro">{sidebarItems[activeTab][0].intro}</div>
            </div>
        </div>
    ),
    value: sidebarItems[activeTab][0].title,
    });

    


    const handleTabClick = (tab) => {
        const firstTabCategory = sidebarItems[tab][0];
        setActiveTab(tab);
        setActiveCategory(firstTabCategory.title);

        setSelectedOption({
            label: (
        <div className="dropdown-option-wrapper">
            <div className="dropdown-option-icon color-0">{firstTabCategory.icon}</div>
            <div className="dropdown-option-label">
                <div className="dropdown-option-title">{firstTabCategory.title}</div>
                <div className="dropdown-option-intro">{firstTabCategory.intro}</div>
            </div>
        </div>
    ),
    value: firstTabCategory.title,
        });
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    // ✅ Dropdown Options with JSX rendering
   const dropdownOptions = sidebarItems[activeTab].map((item, index) => ({
    label: (
        <div className="dropdown-option-wrapper">
            <div className={`dropdown-option-icon color-${index % 4}`}>{item.icon}</div>
            <div className="dropdown-option-label">
                <div className="dropdown-option-title">{item.title}</div>
                <div className="dropdown-option-intro">{item.intro}</div>
            </div>
        </div>
    ),
    value: item.title,
}));


    const handleDropdownChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedOption(selectedOption);
            setActiveCategory(selectedOption.value);
        }
    };

    return (
        <section className="section-body" id="skills">
            <div className="bordered-header">
                <h2 className="section-title">
                    <span style={{ color: "#fff" }}>Technical</span>{" "}
                    <span style={{ color: "#fd4312" }}>Skills</span>
                </h2>
                <p className="section-subtitle">
                    My proficiency in the following technologies and tools.
                </p>
            </div>

            <div className="skills-container">
                <div className="skills-sidebar">
                    <div className="skills-tabs">
                        <button
                            onClick={() => handleTabClick("software")}
                            className={`skills-tab ${activeTab === "software" ? "active" : ""}`}
                        >
                            Software Engineering
                        </button>
                        <button
                            onClick={() => handleTabClick("cyber")}
                            className={`skills-tab ${activeTab === "cyber" ? "active" : ""}`}
                        >
                            Cybersecurity
                        </button>
                    </div>

                    {/* 🔁 Responsive: react-select dropdown on small screens */}
                    <div className="dropdown-mobile">
                        <Select
                            options={dropdownOptions}
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            isSearchable={false}
                            styles={customStyles}
        
                        />
                    </div>

                    {/* 🖥️ Only show full sidebar items on desktop */}
                    <div className="skills-categories desktop-only">
                        {sidebarItems[activeTab].map((item, index) => (
                            <div
                                className="skills-item"
                                key={index}
                                onClick={() => handleCategoryClick(item.title)}
                            >
                                <div className={`skills-icon-wrapper color-${index % 4}`}>
                                    {item.icon}
                                </div>
                                <div className="skills-label">
                                    <span>{item.title}</span>
                                    <p>{item.intro}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-main">
                    {activeTab === "software" && activeCategory === "Languages" && <SLanguages />}
                    {activeTab === "software" && activeCategory === "Frameworks & Libraries" && <Frameworks />}
                    {activeTab === "software" && activeCategory === "DevOps and Tools" && <DevOps />}
                    {activeTab === "software" && activeCategory === "Cloud Platforms" && <CloudPlatforms />}
                    {activeTab === "software" && activeCategory === "Databases" && <Databases />}
                    {activeTab === "software" && activeCategory === "Testing Tools" && <TestingTools />}
                    {activeTab === "software" && activeCategory === "CMS & Others" && <Cms />}

                    {activeTab === "cyber" && activeCategory === "Languages" && <CLanguages />}
                    {activeTab === "cyber" && activeCategory === "OS & Tools" && <OsAndTools />}
                    {activeTab === "cyber" && activeCategory === "Penetration Testing/Ethical Hacking" && <PenetrationTesting />}
                    {activeTab === "cyber" && activeCategory === "Security Operations (Blue Team)" && <SecurityOperations />}
                    {activeTab === "cyber" && activeCategory === "Application Security" && <ApplicationSecurity />}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
