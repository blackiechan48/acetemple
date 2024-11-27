import ReactPixel from 'react-facebook-pixel';

export const initializeFacebookPixel = (pixelId) => {
  ReactPixel.init(pixelId);
  ReactPixel.pageView();
  console.log(`Facebook Pixel initialized with ID: ${pixelId}`);
};

export const trackPixelEvent = (eventName, options = {}) => {
  ReactPixel.track(eventName, options);
  console.log(`Facebook Pixel event tracked: ${eventName}`, options);
};
