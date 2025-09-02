import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initializeGoogleAnalytics, trackPageView } from './Analytics/googleAnalytics';
import { initializeFacebookPixel } from './Analytics/facebookPixels';
import ReactPixel from 'react-facebook-pixel'; // Import ReactPixel for Pixel pageView tracking
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/Services/ServicePage';
import Testimonials from './components/Testimonials';
import PTPage from './components/Services/PTPage';
import OnlineCoaching from './components/Services/OnlineCoaching';
import ChallengeClosedPage from './components/Services/8Weeks challenge/ChallengeClosedPage';
// import AdventCalendarPage from './components/AdventCalendarPage';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsAndConditions from './components/Legal/TermsAndConditions';
import ScrollToTopArrow from './components/HomePage/ScrollToTopArrow';
import NotFoundPage from './NotFoundPage';
import Abc from './components/ABC/Abc';
import ThankYouPage from './components/ABC/ThankYouPage'
import ThirtyDays from './components/30Days';



// Initialize Google An 3alytics and Facebook Pixel
initializeGoogleAnalytics('G-LXC8PNRGF7'); 
initializeFacebookPixel('354506591072910'); 

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views for Google Analytics
    trackPageView(location.pathname);

    // Track page views for Facebook Pixel
    ReactPixel.pageView();
    console.log(`Tracked Facebook Pixel and GA Pageview for: ${location.pathname}`);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/personaltraining" element={<PTPage />} />
        <Route path="/online-coaching" element={<OnlineCoaching />} />
        <Route path="/challenge" element={<ChallengeClosedPage />} />
        {/* <Route path="/advent-calendar" element={<AdventCalendarPage />} /> */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/body-Transformation" element={<Abc/>} />
        <Route path="/You-are-in" element={<ThankYouPage/>} />
        <Route path="/30days" element={<ThirtyDays />} />

      </Routes>
      <ScrollToTopArrow />
      <Footer />
    </Router>
  );
};

export default App;


// // ** remove this to make website live again **

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
