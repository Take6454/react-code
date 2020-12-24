import React from 'react'
import './Skills.css';


function Skills() {
    return (
        <div className="skills_section">
            <h1>My Skills</h1>

            <div className="skills_wrap">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>60%</span>
                        </div>
                        <div className="line react"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Node.js</span>
                            <span>40%</span>
                        </div>
                        <div className="line node"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>40%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
            </div>      
        </div>
    )
}

export default Skills
