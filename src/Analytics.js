import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
  ReactGA.initialize('G-LXC8PNRGF7'); // Replace with your Measurement ID
};

const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
  console.log(`Tracked pageview: ${page}`); // Debugging log
};

const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
  console.log(`Tracked event: ${category}, ${action}, ${label}`); // Debugging log
};

const handleButtonClick = () => {
    ReactPixel.track('Lead', {
      value: 10.00,
      currency: 'USD',
    });
    console.log('Facebook Pixel Event: Lead');
  };
  
  <button onClick={handleButtonClick}>Sign Up</button>;
  
export { initializeAnalytics, trackPageView, trackEvent };
