import { SiJest, SiTestinglibrary, SiCypress, SiPytest } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

const TestingTools = () => {
    const tools = [
        { name: 'Jest', icon: <SiJest /> },
        { name: 'React Testing Library', icon: <SiTestinglibrary /> },
        { name: 'Cypress', icon: <SiCypress /> },
        { name: 'Pytest', icon: <SiPytest /> },
        { name: 'Unittest', icon: <FaPython /> },

    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Testing Tools</h2>
                <span>Testing</span>
            </div>

            <p>Tools I use to write, run, and automate tests for full-stack applications.</p>

            <p className='cards-hls'>
                <span>Jest</span> <span>React Testing Library</span> <span>Cypress</span> <span>Pytest</span> <span>Unittest</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                I use these tools to test application logic, components, and full user workflows—across frontend and backend—with Playwright currently in learning.
            </p>

            <div className="stack-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{tool.icon}</div>
                        <div className="stack-name">{tool.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestingTools;
