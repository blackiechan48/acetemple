import ReactGA from 'react-ga4';

export const initializeGoogleAnalytics = (measurementId) => {
  ReactGA.initialize(measurementId);
  console.log(`Google Analytics initialized with ID: ${measurementId}`);
};

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
  console.log(`Tracked Google Analytics pageview: ${page}`);
};
