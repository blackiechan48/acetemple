import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';
import PersonalTraining from './components/PersonalTraining';
import PTqestions from './components/Questionaire/PTquestions';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/personaltraining" element={<PersonalTraining />} />
          <Route path="/ptquestions" element={<PTqestions />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
