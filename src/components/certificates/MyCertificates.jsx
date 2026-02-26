import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

import './styles.css';
import ecCouncilLogo from '../../assets/certsxprojects/ec-council-logo.png';
import ciscoLogo from '../../assets/certsxprojects/cisco-logo.png';
import freeCodeLogo from '../../assets/certsxprojects/freecodecamp-logo.png';

import ecCouncilCB from '../../assets/certsxprojects/csec-business.png';
import freeCodeInfosec from '../../assets/certsxprojects/fcc_infosec.png';
import freeCodeBackend from '../../assets/certsxprojects/freecodebackend_dev.png';
import freeCodeFdl from '../../assets/certsxprojects/freecodecamp-fdl.png';
import ciscoEH from '../../assets/certsxprojects/cisco-eh-acad.jpg';
import freeCodeRWD from '../../assets/certsxprojects/freecode-web-cert.png';

const certData = [
  {
    'orgLogo': ecCouncilLogo,
    'orgName': "EC-Council",
    'title': "Cybersecurity for Business",
    'certImg': ecCouncilCB,
    'overview': "Cybersecurity for Business by EC-Council equips professionals to protect small-medium businesses against Cyber threats through risk management, policy development, and incident response.",
    'skills': ["Cybersecurity Awaraness", "Security Best Practices for Small-Medium Businesses", "Risk Assessment & Management", "Incident Response Planning",
      "Business Continuity Planning", "Security Policy Development", "SMBs Cyber Threat Mitigation"
    ],
    'link': "https://learn.eccouncil.org/certificate/abfc6a0f-7b40-444f-ac1f-3b373f6f0aab?"
  },

  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Information Security",
    'certImg': freeCodeInfosec,
    'overview': "Information Security Curriculum by freeCodeCamp demonstrates hands on experience in securing web applications especially Node.js apps, alongside scripting using Python",
    'skills': ["Web Application Security", "Scripting (Python)"],
    'link': "https://www.freecodecamp.org/certification/Leonard101/information-security-v7"
  },

  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Backend Development & APIs",
    'certImg': freeCodeBackend,
    'overview': "Backend Development & APIs by freeCodeCamp demonstrates hands on experience in building microservices using Node.js and Express.js",
    'skills': ["Node.js", "Express.js", "MongoDB", "API design", "API Integration"],
    'link': "https://freecodecamp.org/certification/Leonard101/back-end-development-and-apis"
  },

  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Front End Development Libraries",
    'certImg': freeCodeFdl,
    'overview': "Front End Development Libraries by freeCodeCamp demonstrates hands-on expertise in modern UI frameworks like React, Redux, Bootstrap, and Sass.",
    'skills': ["Front-End Development", "JavaScript(ES6+)", "React", "Redux", "Bootstrap", "Sass"],
    'link': "https://www.freecodecamp.org/certification/Leonard101/front-end-development-libraries"
  },
  {
    'orgLogo': ciscoLogo,
    'orgName': "Cisco",
    'title': "Ethical Hacker",
    'certImg': ciscoEH,
    'overview': 'Ethical Hacker by Cisco validates practical skills in penetration testing, vulnerability assessment, and ethical hacking across networks, systems, and IoT environments.',
    'skills': ["Ethical Hacking", "Penetration Testing", "Exploiting Networks", "Vulnerability Assessment", "Vulnerability Scanning", "IoT Security", "Reporting", "Social Engineering"],
    'link': "https://www.credly.com/badges/89d6adaa-25a9-4475-9a93-a9b10acbc8b9/linked_in_profile"
  },
  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Responsive Web Design",
    'certImg': freeCodeRWD,
    'overview': "Responsive Web Design by freeCodeCamp showcases proficiency in building mobile-friendly websites using HTML5, CSS3, and basic JavaScript principles.",
    'skills': ["Responsive Design", "HTML5", "CSS3", "JavaScipt"],
    'link': "https://www.freecodecamp.org/certification/Leonard101/responsive-web-design"
  },
    
];

const Certificates = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    el.addEventListener('scroll', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: -width, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: width, behavior: 'smooth' });
  };

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-top">
        <div className="cert-info">
          <h2 className='section-title'>Certificates</h2>
          <p className='section-subtitle'>Software Engineering & Cybersecurity</p>
        </div>
        <div className="cert-stats">
          <h3>Verified Credentials</h3>
          <p>7+ Certifications</p>
        </div>
      </div>

      <div className="certificates-carousel-wrapper">
        {canScrollLeft && (
          <button className="scroll-button left glow-button" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
        )}

        <div className="certificates-carousel" ref={carouselRef}>
          {certData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-left">
                <div className="org-name">
                  <img src={cert.orgLogo} alt={cert.orgName} />
                  <span>{cert.orgName}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-image-container">
                  <img src={cert.certImg} alt={`${cert.title} Certificate`} className="cert-image" />
                  <div className="cert-image-overlay"></div>
                </div>
              </div>

              <div className="cert-card-right">
                <div>
                  <h4 className="cert-overview">Overview</h4>
                  <p className="overview-desc">{cert.overview}</p>

                  <h4>Skills Gained</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>
                </div>
                
               <button onClick={() => window.open(cert.link, '_blank')} className="view-credential">View Credential</button>
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button className="scroll-button right glow-button" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Certificates;
