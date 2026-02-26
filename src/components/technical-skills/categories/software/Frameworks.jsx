import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiAngular, SiExpress, SiDjango, SiFastapi, SiTailwindcss, SiNestjs, SiSpring } from 'react-icons/si';


const Frameworks = () => {
    const frameworks = [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Frameworks & Libraries</h2>
                <span>Frameworks & Libraries</span>
            </div>

            <p>Tools that streamline application development and styling.</p>

            <p className='cards-hls'>
                <span>Spring Boot</span> <span>Node.js</span> <span>Express.js</span> <span>NestJS</span> <span>React</span> <span>Angular</span> <span>Tailwind CSS</span> <span>Bootstrap</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>These libraries and frameworks enable me to build scalable APIs, dynamic UIs, and modern web apps efficiently.</p>

            <div className="stack-grid">
                {frameworks.map((framework, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{framework.icon}</div>
                        <div className="stack-name">{framework.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frameworks;
