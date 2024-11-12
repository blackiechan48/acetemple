import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Sample content for each day
const calendarContent = [
  { day: 1, title: "Day 1: Kickoff!", videoLink: "https://www.youtube.com/embed/video1", link: "/link1" },
  { day: 2, title: "Day 2: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  // Additional days here...
  { day: 24, title: "Day 24: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
];

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f2f2f2;
  background-image: url('/advent/christmasbg.gif');
`;

const Title = styled.h1`
  font-size: 2em;
  color: #8b0000;
  text-align: center;
  margin-bottom: 20px;
`;

const ComingSoonContainer = styled.div`
  max-width: 500px;
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const EmailInput = styled.input`
  padding: 10px;
  margin-top: 15px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  color: white;
  background-color: #8b0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #a00000;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SnowflakeAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

const Snowflake = styled.div`
  font-size: 2em;
  color: #ffcccc;
  animation: ${SnowflakeAnimation} 1.5s ease-in-out infinite;
  margin: 0 5px;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  width: 100%;
`;

const CalendarDoor = styled.div`
  background: ${({ isOpen }) => (isOpen ? '#ffd700' : '#8b0000')};
  color: #fff;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 8px;
  cursor: ${({ isUnlocked }) => (isUnlocked ? 'pointer' : 'default')};
  opacity: ${({ isUnlocked }) => (isUnlocked ? 1 : 0.5)};
  transition: background 0.3s ease;
`;

const CardOverlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Card = styled.div`
  background: #ffffff;
  color: #8b0000;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: 'Merriweather', serif;
  background-image: url('/advent/christmas.png');
  background-repeat: no-repeat;
  background-position: top center;
  border: 4px solid #ff0000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #8b0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-top: 10px;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  background: #ff0000;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

const AdventCalendarPage = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [email, setEmail] = useState("");
  const [openDoors, setOpenDoors] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const today = new Date();
    if (today.getMonth() === 11 && today.getDate() >= 1) {
      setIsLocked(false);
    }
  }, []);

  const handleEmailSubmit = () => {
    alert(`Thank you! We’ll remind you on December 1st.`);
    setEmail("");
  };

  const handleDoorClick = (day) => {
    if (!isLocked && day <= new Date().getDate()) {
      setSelectedDay(day);
      setOpenDoors((prev) => ({ ...prev, [day]: true }));
    }
  };

  const handleCloseCard = () => {
    setSelectedDay(null);
  };

  const selectedDayContent = selectedDay
    ? calendarContent.find(dayContent => dayContent.day === selectedDay) || { title: "Content Not Found", videoLink: "", link: "#" }
    : null;

  return (
    <Container>
      <Title>Digital Advent Calendar</Title>

      {isLocked ? (
        <ComingSoonContainer>
          <p>Your Health and Fitness Calendar is coming soon!</p>
          <p>Drop your email below to be reminded when it’s live on December 1st.</p>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton onClick={handleEmailSubmit}>Remind Me</SubmitButton>
        </ComingSoonContainer>
      ) : (
        <>
          <ArrowContainer>
            <Snowflake>❄️</Snowflake>
            <Snowflake>❄️</Snowflake>
          </ArrowContainer>
          <CalendarContainer>
            {Array.from({ length: 24 }, (_, index) => {
              const day = index + 1;
              const isUnlocked = openDoors[day] || day <= new Date().getDate();
              const isOpen = isUnlocked;

              return (
                <CalendarDoor
                  key={day}
                  isOpen={isOpen}
                  onClick={() => handleDoorClick(day)}
                  isUnlocked={isUnlocked}
                >
                  {isOpen ? day : '🎁'}
                </CalendarDoor>
              );
            })}
          </CalendarContainer>
        </>
      )}

      {selectedDayContent && (
        <CardOverlay isVisible={!!selectedDay}>
          <Card>
            <CloseButton onClick={handleCloseCard}>✖</CloseButton>
            <h2>{selectedDayContent.title}</h2>
            <VideoFrame
              src={selectedDayContent.videoLink}
              title={`Video for Day ${selectedDay}`}
              aria-label={`Video for Day ${selectedDay}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <LinkButton href={selectedDayContent.link} target="_blank" rel="noopener noreferrer">
              Access Content
            </LinkButton>
          </Card>
        </CardOverlay>
      )}
    </Container>
  );
};

export default AdventCalendarPage;
