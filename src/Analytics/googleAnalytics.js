import ReactGA from 'react-ga4';

export const initializeGoogleAnalytics = (measurementId) => {
  ReactGA.initialize(measurementId);
  console.log(`Google Analytics initialized with ID: ${measurementId}`);
};

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
  console.log(`Tracked pageview: ${page}`);
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
  console.log(`Tracked event: ${category}, ${action}, ${label}`);
};
