import React, { Fragment } from 'react';
import CountriesApp from '../../assets/countries_app.png';
import ResumeApp from '../../assets/resume_app.jpg';
import DevSocializa from '../../assets/devsocializa_app.jpg';
import PokemonApp from '../../assets/pokemon_app.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faJava } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ repos }) => {
    return (
        <Fragment>
            <div className='portfolio-list'>
                {repos.map(repository => {
                    let imageSrc = '';
                    let iconSrc = '';
                    let color = '';

                    if (repository.language === 'JavaScript') {
                        iconSrc = faJsSquare;
                        color = '#F7DF1E';
                    } else if (repository.language === 'Java') {
                        iconSrc = faJava;
                        color = 'Orange';
                    }

                    if (repository.name === 'DevSocializa')
                        imageSrc = DevSocializa;
                    else if (repository.name === 'ResumeApp')
                        imageSrc = ResumeApp;
                    else if (repository.name === 'PokemonApp')
                        imageSrc = PokemonApp;
                    else if (repository.name === 'CountriesApp')
                        imageSrc = CountriesApp;

                    return (
                        <div
                            key={repository.id}
                            className='row'
                            data-aos='fade-right'
                        >
                            <div className='column'>
                                <a
                                    href={repository.html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img src={imageSrc} alt='Repo Preview' />
                                </a>
                            </div>
                            <div className='column'>
                                <div className='repo-name'>
                                    <a
                                        href={repository.html_url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <h3>{repository.name}</h3>
                                    </a>
                                    <FontAwesomeIcon
                                        icon={iconSrc}
                                        size='2x'
                                        color={color}
                                        className='left-20'
                                    />
                                </div>
                                <p>{repository.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Projects;
