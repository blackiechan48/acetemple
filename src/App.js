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
import BodyTransformationForm from './components/Services/8Weeks challenge/BodyTransformationForm';
// import AdventCalendarPage from './components/AdventCalendarPage';
import ScrollToTopArrow from './components/HomePage/ScrollToTopArrow';
import ConsultationForm from './components/Forms/ConsultationForm';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsAndConditions from './components/Legal/TermsAndConditions';


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
          <Route path="8weeks-challenge" element ={<BodyTransformationForm />}/>
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/OnlineCoaching" element={<OnlineCoaching />} />
          {/* <Route path ="/advent-calendar" element={<AdventCalendarPage/>}/> */}
          <Route path ="/consultation-form" element={<ConsultationForm/>}/>
          <Route path ="/privacy" element={<PrivacyPolicy/>}/>
          <Route path ="/terms" element={<TermsAndConditions/>}/>
          <Route path ="/consultation-form" element={<ConsultationForm/>}/>
          {/* Add more routes as needed */}
        </Routes>
        <ScrollToTopArrow />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// ** remove this to make website live again **
// src/App.js
// src/App.js
// import React from 'react';
// import UnderMaintenance from './components/maintenance/UnderMaintenance';

// function App() {
//   return (
//     <div className="App">
//       <UnderMaintenance />
//     </div>
//   );
// }

// export default App;
