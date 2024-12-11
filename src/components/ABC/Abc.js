import React from'react';
import HeroAbc from './HeroAbc';
import Introduction from './introduction';
import ChallengeIntroduction from './ChallengeIntroduction';
import GuaranteeBanner from './GuaranteeBanner';
import BeforeAfterSection from './Before AndAfterSection';
import SocialProof from './SocialProof';
import Offer from './Offer';
import CurriculumSummary from './CurriculumSummary';
import JoinChallenge from './JoinChallenge';
import WhatsIncluded from './WhatsIncluded';
import MeetInstructor from './MeetInstructor';
import VideoTestimonial from './Videotestimonial';
// import WhoIsThisFor from './WhoIsThisFor';
import FAQ from './FAQ';

const Abc = () => {
    return (
      <>
        <HeroAbc />
        <GuaranteeBanner />
        <Introduction />
        <ChallengeIntroduction />
        <MeetInstructor/>
        <BeforeAfterSection />
        <SocialProof />
        <Offer />
        <VideoTestimonial
        title="Still Not Convinced?"
        subtitle="Hear what Paida has to say !"
        videoSrc="https://www.youtube.com/embed/1ew-winZcks"
        ctaText="Join the Challenge"
        ctaLink="https://buy.stripe.com/9AQeWK5AW8qT5vW5ky" />
        <CurriculumSummary />
        <JoinChallenge />
        <WhatsIncluded />
        {/* <WhoIsThisFor /> */}
        <FAQ />
        <JoinChallenge />
      

       
      </>
    );
  };
  
  export default Abc;
  