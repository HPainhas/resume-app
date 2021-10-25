import React, { Fragment, useEffect } from 'react';
import logo from '../../assets/HPainhas_logo_medium.png';
import $ from 'jquery';

const MobileNavbar = () => {
    useEffect(() => {
        $('#hamburger').on('click', function () {
            $('#hamburger')
                .removeClass('hamburger--collapse-r is-active')
                .addClass('hamburger--collapse-r is-active');
            $('#dropdown').removeClass('active').addClass('active');
        });

        $('#close-menu').on('click', function () {
            $('#hamburger').removeClass('hamburger--collapse-r is-active');
            $('#dropdown').removeClass('active');
        });
    }, []);

    return (
        <Fragment>
            <div className='mobile-navbar'>
                <div className='mobile-navbar-inner'>
                    <div className='container bigger'>
                        <div className='mobile-navbar-in'>
                            <div className='logo'>
                                <a
                                    aria-current='page'
                                    className='active'
                                    href='/'
                                >
                                    <img src={logo} alt='HPainhas Logo' />
                                </a>
                            </div>
                            <div className='trigger'>
                                <div id='hamburger' className='hamburger'>
                                    <div className='hamburger-box'>
                                        <div className='hamburger-inner'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='dropdown' className='dropdown'>
                    <div className='container'>
                        <span id='close-menu' className='close-menu'>
                            close
                        </span>
                        <div className='dropdown-inner'>
                            <ul className='anchor-nav'>
                                <li className='current'>
                                    <a href='#home'>Home</a>
                                </li>
                                <li>
                                    <a href='#about'>About</a>
                                </li>
                                <li>
                                    <a href='#portfolio'>Portfolio</a>
                                </li>
                                <li>
                                    <a href='#resume'>Resume</a>
                                </li>
                                <li>
                                    <a href='#contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MobileNavbar;
