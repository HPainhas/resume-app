import React, { Fragment } from 'react';
import SimpleModal from '../layout/SimpleModal';
import resumeData from '../../assets/resume.json';
import ColumbusPic from '../../assets/columbus_skyline_background.jpg';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCurrentLocation } from 'react-icons/bi';

const contact = resumeData.contact;

const Contact = () => {
    const contactDisplay = contact.map(info => {
        let icon = null;

        switch (info.type) {
            case 'email':
                icon = (
                    <HiOutlineMail
                        className='svg'
                        size='2rem'
                        color={'white'}
                    />
                );
                break;
            case 'location':
                icon = (
                    <BiCurrentLocation
                        className='svg'
                        size='2rem'
                        color={'white'}
                    />
                );
                break;
            case 'phone':
                icon = (
                    <FiPhoneCall className='svg' size='2rem' color={'white'} />
                );
                break;
            case 'linkedin':
                icon = (
                    <a href={info.url} target='_blank' rel='noreferrer'>
                        <FaLinkedin
                            className='svg'
                            size='2rem'
                            color={'white'}
                        />
                    </a>
                );
                break;
            case 'github':
                icon = (
                    <a href={info.url} target='_blank' rel='noreferrer'>
                        <SiGithub className='svg' size='2rem' color={'white'} />
                    </a>
                );
                break;
            default:
                icon = null;
                break;
        }

        return (
            <li key={info.value}>
                <div className='contact-info-inner'>
                    {icon}
                    <p>{info.value}</p>
                </div>
            </li>
        );
    });

    return (
        <Fragment>
            {contact !== null ? (
                <section id='contact' className='section-container'>
                    <div
                        className='contact big-image'
                        style={{
                            backgroundImage: `url(${ColumbusPic})`,
                        }}
                    >
                        <div className='shape'>
                            <img
                                className='svg'
                                src='http://shanereact.ibthemespro.com/img/svg/paper.svg'
                                alt='paper shape'
                            />
                        </div>
                        <div id='talk' className='background'></div>
                        <div className='contact-inner'>
                            <div className='text' data-aos='zoom-in'>
                                <h3>Let's connect!</h3>
                            </div>
                            <div data-aos='fade-up'>
                                <SimpleModal buttonLabel='Contact Me'>
                                    <div className='contact-modal'>
                                        <h2>Get in touch</h2>
                                        <div className='contact-info'>
                                            <ul>{contactDisplay}</ul>
                                        </div>
                                    </div>
                                </SimpleModal>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </Fragment>
    );
};

export default Contact;
