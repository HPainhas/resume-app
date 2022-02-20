import React, { Fragment } from 'react';
import Tooltip from '@mui/material/Tooltip';
import {
    SiPerl,
    SiJava,
    SiJavascript,
    SiMysql,
    SiReact,
    SiKotlin,
    SiGit,
    SiJira,
    SiHtml5,
    SiCss3,
} from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { BiCodeAlt } from 'react-icons/bi';
import resumeData from '../../assets/resume.json';

const EDUCATION = resumeData.education;
const LEADERSHIP = resumeData.leadership;
const TOAST_JOB = resumeData.workExperience[0];
const ERETAILING_JOB = resumeData.workExperience[1];
const VYRA_JOB = resumeData.workExperience[2];

const Resume = () => {
    return (
        <Fragment>
            {resumeData !== null ? (
                <section id='resume' className='section-container'>
                    <div className='resume'>
                        <div className='container'>
                            <div className='position-relative'>
                                <div className='title'>
                                    <span>Resume</span>
                                </div>
                                <div className='row work'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Work Experience</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div>
                                                    <h3>{TOAST_JOB.name}</h3>
                                                    <p className='job-location'>
                                                        {TOAST_JOB.location}
                                                    </p>
                                                    <p className='job-title'>
                                                        {TOAST_JOB.position}
                                                        <span>•</span>
                                                        <em className='date'>
                                                            {
                                                                TOAST_JOB.start_end_date
                                                            }
                                                        </em>
                                                    </p>
                                                    <p className='job-info'>
                                                        {TOAST_JOB.description}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3>
                                                        {ERETAILING_JOB.name}
                                                    </h3>
                                                    <p className='job-location'>
                                                        {
                                                            ERETAILING_JOB.location
                                                        }
                                                    </p>
                                                    <p className='job-title'>
                                                        {
                                                            ERETAILING_JOB.position
                                                        }
                                                        <span>•</span>
                                                        <em className='date'>
                                                            {
                                                                ERETAILING_JOB.start_end_date
                                                            }
                                                        </em>
                                                    </p>
                                                    <p className='job-info'>
                                                        {
                                                            ERETAILING_JOB.description
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className='job-title-mobile'>
                                                        <h3
                                                            style={{
                                                                display:
                                                                    'inline',
                                                                marginRight:
                                                                    '10px',
                                                            }}
                                                        >
                                                            {VYRA_JOB.name}
                                                        </h3>
                                                        <span>(startup)</span>
                                                    </div>
                                                    <p className='job-location'>
                                                        {VYRA_JOB.location}
                                                    </p>
                                                    <p className='job-title'>
                                                        {VYRA_JOB.position}
                                                        <span>•</span>
                                                        <em className='date'>
                                                            {
                                                                VYRA_JOB.start_end_date
                                                            }
                                                        </em>
                                                    </p>
                                                    <p className='job-info'>
                                                        {VYRA_JOB.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row education'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Education</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div>
                                                    <h3>{EDUCATION.college}</h3>
                                                    <p className='degree'>
                                                        {EDUCATION.major}
                                                        <span>•</span>
                                                        <em className='date'>
                                                            {
                                                                EDUCATION.graduation_date
                                                            }
                                                        </em>
                                                    </p>
                                                    <div className='degree-info-mobile'>
                                                        <p className='gpa'>
                                                            GPA
                                                            <span>:</span>
                                                            <span
                                                                style={{
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {EDUCATION.gpa}
                                                            </span>
                                                        </p>
                                                        <p className='deans'>
                                                            Dean's List (&gt;=
                                                            3.5 GPA)
                                                            <span>:</span>
                                                            <span
                                                                style={{
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {
                                                                    EDUCATION.deans_list
                                                                }
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row leadership'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Leadership</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div>
                                                    <h3>{LEADERSHIP.name}</h3>
                                                    <p className='job-title'>
                                                        {LEADERSHIP.location}
                                                        <span>•</span>
                                                        <em className='date'>
                                                            {LEADERSHIP.date}
                                                        </em>
                                                    </p>
                                                    <p className='job-info'>
                                                        {LEADERSHIP.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row skill'>
                                    <div className='three columns header-col'>
                                        <h1>
                                            <span>Technical Skills</span>
                                        </h1>
                                    </div>
                                    <div className='nine columns main-col'>
                                        <div className='row item'>
                                            <div className='twelve columns'>
                                                <div className='technical-skills'>
                                                    {resumeData.technicalSkills.map(
                                                        skill => {
                                                            let icon = null;

                                                            switch (
                                                                skill.name
                                                            ) {
                                                                case 'JavaScript':
                                                                    icon = (
                                                                        <SiJavascript
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Java':
                                                                    icon = (
                                                                        <SiJava
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Perl':
                                                                    icon = (
                                                                        <SiPerl
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'HTML5':
                                                                    icon = (
                                                                        <SiHtml5
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'CSS':
                                                                    icon = (
                                                                        <SiCss3
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'SQL':
                                                                    icon = (
                                                                        <SiMysql
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Android':
                                                                    icon = (
                                                                        <DiAndroid
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'React':
                                                                    icon = (
                                                                        <SiReact
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Jira':
                                                                    icon = (
                                                                        <SiJira
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Git':
                                                                    icon = (
                                                                        <SiGit
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                case 'Kotlin':
                                                                    icon = (
                                                                        <SiKotlin
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                                default:
                                                                    icon = (
                                                                        <BiCodeAlt
                                                                            size='3rem'
                                                                            color={
                                                                                skill.color
                                                                            }
                                                                        />
                                                                    );
                                                                    break;
                                                            }

                                                            return (
                                                                <div
                                                                    key={
                                                                        skill.name
                                                                    }
                                                                    className='tech-skill'
                                                                    data-aos='zoom-in'
                                                                >
                                                                    <Tooltip
                                                                        title={
                                                                            skill.name
                                                                        }
                                                                    >
                                                                        <div>
                                                                            {
                                                                                icon
                                                                            }
                                                                        </div>
                                                                    </Tooltip>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
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

export default Resume;
