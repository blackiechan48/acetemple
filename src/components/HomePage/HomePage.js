import React from 'react';
import FeatureBoxes from '../HomePage/FeatureBox';
// import LeadGeneration from '../HomePage/LeadGeneration'
import ForeverMission from '../HomePage/ForeverMission';
import HomeHero from './HomeHero';
// import Header from './Header';
const HomePage = () => {
  return (
    <div className="home">
    {/* <Header /> */}
    <HomeHero/>
    <ForeverMission />
    <FeatureBoxes />
    {/* <LeadGeneration /> */}
  </div>
);
};

export default HomePage;
