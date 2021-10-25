import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Projects from '../layout/Projects';
import resumeData from '../../assets/resume.json';

const githubUsername = resumeData.githubUsername;
const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

const Portfolio = () => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        const getGithubRepos = async username => {
            try {
                const gitHubResponse = await axios.get(
                    `https://api.github.com/users/${username}/repos?per_page=4&sort=created:asc&client_id${githubClientId}&client_secret${githubClientSecret}`
                );

                setRepos(gitHubResponse.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        getGithubRepos(githubUsername);
    }, []);

    return (
        <Fragment>
            {repos !== null ? (
                <section id='portfolio' className='section-container'>
                    <div className='portfolio'>
                        <div className='container'>
                            <div className='position-relative'>
                                <div className='title'>
                                    <span>Portfolio</span>
                                    <h3>Technical Projects</h3>
                                </div>
                                <Projects repos={repos} />
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </Fragment>
    );
};

export default Portfolio;
