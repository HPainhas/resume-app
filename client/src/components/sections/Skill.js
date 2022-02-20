import React, { Fragment } from 'react';
import resumeData from '../../assets/resume.json';
import Skills from '../layout/Skills';

const Skill = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='skill' className='section-container'>
                    <div className='skills'>
                        <div className='container'>
                            <div className='skills-inner'>
                                <div className='left'>
                                    <div className='title'>
                                        <h3>
                                            I have high skills in programming
                                            and solving problems
                                        </h3>
                                    </div>
                                    <div className='text'>
                                        <p>{resumeData.skills_bio}</p>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='skill-progress'>
                                        <Skills
                                            skills={
                                                resumeData.developmentSkills
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </Fragment>
    );
};

export default Skill;
