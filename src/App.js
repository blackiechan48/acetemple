import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import ServicesPage from './components/Services/ServicePage';
import Footer from './components/Footer';
import PTPage from './components/Services/PTPage';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage';
import OnlineCoaching from './components/Services/OnlineCoaching';
import TransformationChallenge from './components/Services/8Weeks challenge/TransformationChallenge';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/personaltraining" element={<PTPage />} />
          <Route path="8weekschallenge" element ={<TransformationChallenge />}/>
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/OnlineCoaching" element={<OnlineCoaching />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
