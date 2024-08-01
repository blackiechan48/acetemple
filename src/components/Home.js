import React from 'react';
import FeatureBoxes from '../components/HomePage/FeatureBox';
import LeadGeneration from '../components/HomePage/LeadGeneration'
import ForeverMission from './HomePage/ForeverMission';
import HomeHero from '../components/Heros/HomeHero';
// import Header from './Header';
const Home = () => {
  return (
    <div className="home">
    {/* <Header /> */}
    <HomeHero/>
    <ForeverMission />
    <FeatureBoxes />
    <LeadGeneration />
  </div>
);
};

export default Home;
