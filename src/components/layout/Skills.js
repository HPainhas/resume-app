import React, { Fragment } from 'react';

const Skills = ({ skills }) => {
    return (
        <Fragment>
            {skills.map(skill => {
                return (
                    <div
                        key={skill.name}
                        className='progress-inner'
                        data-aos='fade-up'
                    >
                        <span>
                            <span className='label'>{skill.name}</span>
                            <span className='number'>{skill.value}%</span>
                        </span>
                        <div className='background'>
                            <div className='bar'>
                                <div
                                    className='bar-progress'
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Fragment>
    );
};

export default Skills;
