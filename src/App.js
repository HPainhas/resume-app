import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import resumeData from './assets/resume.json';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import NotFound from './components/layout/NotFound';
import MobileNavbar from './components/layout/MobileNavbar';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
    AOS.init({
        delay: 200,
        duration: 1000,
        once: false,
        mirror: true,
    });
    AOS.refresh();

    return (
        <Router>
            <Fragment>
                <Navbar />
                <MobileNavbar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route component={NotFound} />
                </Switch>
                <Footer resumeData={resumeData} />
            </Fragment>
        </Router>
    );
};

export default App;
