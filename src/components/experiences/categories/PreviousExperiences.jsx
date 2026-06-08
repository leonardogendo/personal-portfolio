import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const experienceData = [
    {
        jobTitle: 'Freelance Software Developer',
        company: 'Online Platforms | Casual Contracts',
        location: 'Remote',
        startDate: '2022-02-01',
        endDate: '2025-08-18',
        dateLabel: 'February 2022 – August 2025',
        activities: [
            {
                title: 'Delivered Full-Stack Web Solutions to Clients',
                description:
                    'Developed and deployed secure, API-driven applications using Django. Built dynamic frontends with React & Angular, integrating features like authentication, dashboards, and admin panels.',
            },
            {
                title: 'Implemented Scalable Architectures with Security in Focus',
                description:
                    'Designed backend architectures with modular structure, JWT authentication, and RBAC. Applied input validation, rate limiting, and HTTPS configurations to protect against common vulnerabilities.',
            },
            {
                title: 'Automated Deployments & Streamlined Workflows',
                description:
                    'Configured GitHub Actions for continuous integration and deployment. Reduced delivery time by automating tests, linting, and deploys across freelance projects using Docker, Heroku, and Netlify.',
            },
        ],
    },

    {
        jobTitle: 'Security Researcher',
        company: 'BugCrowd',
        location: 'Remote',
        startDate: '2025-08-11',
        dateLabel: 'August 2025 – Present',
        activities: [
            {
                title: 'Analyzed Web Applications and APIs to Map Attack Surfaces and Identify Entry Points',
                description:
                    'Applied industry security frameworks to assess web applications and APIs, mapping attack surfaces and identifying potential entry points through structured analysis and threat modeling.',
            },
            {
                title: 'Documented and Reported Security Findings Through Structured Disclosure Programs',
                description:
                    'Compiled and submitted actionable vulnerability reports via responsible disclosure and bug bounty programs, enabling organizations to validate, prioritize, and remediate security risks effectively.',
            },
        ],
    },

    {
        jobTitle: 'IT Technical Support - Internship',
        company: 'KeNHA',
        location: 'Kakamega County, Kenya · On-site',
        startDate: '2024-05-01',
        endDate: '2024-08-14',
        dateLabel: 'May 2024 – August 2024',
        activities: [
            {
                title: 'Resolved Daily Hardware and Software Issues Across Departments',
                description:
                    'Provided end-user support for system errors, configuration issues, and basic troubleshooting of desktop applications and devices.',
            },
            {
                title: 'Performed Regular Maintenance and Security Updates',
                description:
                    'Ensured antivirus, application installations, and system updates were consistently applied across organization endpoints.',
            },
            {
                title: 'Monitored Networks and Maintained IT Asset Inventory',
                description:
                    'Worked with IT team to troubleshoot network issues and kept accurate logs of devices and software for auditing.',
            },
        ],
    },
];

const PreviousExperiences = () => {
    const containerRef = useRef(null);

    const scrollToBlock = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const blocks = container.querySelectorAll('.experience-block');
    const currentScroll = container.scrollTop;
    const containerHeight = container.clientHeight;

    let targetBlock = null;

    if (direction === 'down') {
        for (let block of blocks) {
            if (block.offsetTop > currentScroll + 10) {
                targetBlock = block;
                break;
            }
        }
    } else {
        for (let i = blocks.length - 1; i >= 0; i--) {
            const block = blocks[i];
            if (block.offsetTop < currentScroll - 10) {
                targetBlock = block;
                break;
            }
        }
    }

    if (targetBlock) {
        container.scrollTo({
            top: targetBlock.offsetTop,
            behavior: 'smooth',
        });
    }
};


    return (
        <div className="previous-experience-wrapper">
            <div className="scroll-container" ref={containerRef}>
                {experienceData.map((exp, index) => {

                    const months = exp.endDate ? calculateMonths(exp.startDate, exp.endDate) : calculateMonths(exp.startDate);

                    return (
                        <section className="experience-block" key={index}>
                            <div className="previous-role">
                                <div className="role-header">
                                    <div className="role-info">
                                        <h3 className="job-title">{exp.jobTitle}</h3>
                                        <div className="company-location">
                                            <span><FaBuilding /> {exp.company}</span>
                                            <span><FaMapMarkerAlt /> {exp.location}</span>
                                        </div>
                                    </div>
                                    <div className="role-duration">
                                        <span><FaCalendarAlt /> {exp.dateLabel}</span>
                                        <span className="role-months">
                                            {months} {months === 1 ? 'month' : 'months'}
                                        </span>
                                    </div>
                                </div>

                                <div className="role-timeline">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-activities">
                                        {exp.activities.map((activity, idx) => (
                                            <div className="activity-item" key={idx}>
                                                <h4>{activity.title}</h4>
                                                <p>{activity.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <div className="scroll-buttons">
                <button onClick={() => scrollToBlock('up')}><FaArrowUp /></button>
                <button onClick={() => scrollToBlock('down')}><FaArrowDown /></button>
            </div>
        </div>
    );
};

export default PreviousExperiences;
