import React from 'react';
import FeatureBoxes from '../HomePage/FeatureBox';
// import LeadGeneration from '../HomePage/LeadGeneration'
import ForeverMission from '../HomePage/ForeverMission';
import HomeHero from './HomeHero';
const HomePage = () => {
  return (
    <div className="home">
    <HomeHero/>
    <ForeverMission />
    <FeatureBoxes />
    {/* <LeadGeneration /> */}
  </div>
);
};

export default HomePage;
