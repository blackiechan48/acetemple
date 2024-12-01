import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Sample content for each day
const calendarContent = [
  { day: 1, title: "Day 1: Welcome and Thank you!", videoLink: "https://www.youtube.com/embed/Gm3uwL6shYs?si=OVb2HzCrmMYt2k7o" },
  { day: 2, title: "Day 2: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 3, title: "Day 3: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 4, title: "Day 4: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 5, title: "Day 5: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 6, title: "Day 6: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 7, title: "Day 7: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 8, title: "Day 8: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 9, title: "Day 9: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 10, title: "Day 10: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 11, title: "Day 11: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 12, title: "Day 12: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 13, title: "Day 13: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 14, title: "Day 14: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 15, title: "Day 15: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 16, title: "Day 16: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 17, title: "Day 17: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 18, title: "Day 18: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 19, title: "Day 19: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 20, title: "Day 20: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 21, title: "Day 21: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 22, title: "Day 22: Warm-Up", videoLink: "https://www.youtube.com/embed/1ew-winZcks", link: "www.bbc.com" },
  { day: 23, title: "Day 23: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 24, title: "Day 24: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
];
// // Fisher-Yates shuffle
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 20px;
  padding: 0 20px;
  font-size: 1.2rem;
  line-height: .9;
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
  const [openDoors, setOpenDoors] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [shuffledDays, setShuffledDays] = useState([]);

  // Shuffle days on initial load
  useEffect(() => {
    setShuffledDays(shuffleArray(calendarContent));
  }, []);

  // Load opened doors from local storage
  useEffect(() => {
    const savedOpenDoors = JSON.parse(localStorage.getItem("openDoors")) || {};
    setOpenDoors(savedOpenDoors);
  }, []);

  // Save opened doors to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("openDoors", JSON.stringify(openDoors));
  }, [openDoors]);

  const handleDoorClick = (day) => {
    const today = new Date();
    if (today.getMonth() === 11 && day <= today.getDate()) { // Ensure it's December
      setSelectedDay(day);
      setOpenDoors((prev) => ({ ...prev, [day]: true }));
    } else {
      alert("This door is not available yet!");
    }
  };

  const handleCloseCard = () => {
    setSelectedDay(null);
  };

  const selectedDayContent = selectedDay
    ? calendarContent.find((dayContent) => dayContent.day === selectedDay) || {
        title: "Content Not Found",
        videoLink: "",
        link: null,
      }
    : null;

  return (
    <Container>
      <Title>🎄 Welcome to the Fitmas Countdown! 🎅💪</Title>
      <Description>
        
        Each day, a new surprise awaits behind the door:
        <ul>
          <li>✨ Quick workouts to fit into your busy schedule</li>
          <li>✨ Wellness tips to reduce holiday stress</li>
          <li>✨ Healthy, festive recipes to enjoy guilt-free</li>
          <li>✨ Fun challenges to keep you motivated</li>
          <li>✨ And a few surprises to make it extra special!</li>
        </ul>
        Let’s make this season strong, joyful, and full of progress—together.
      </Description>

      <>
        <ArrowContainer>
          <Snowflake>❄️</Snowflake>
          <Snowflake>❄️</Snowflake>
        </ArrowContainer>
        <CalendarContainer>
          {shuffledDays.map((content, index) => {
            const day = content.day;
            const today = new Date();
            const isUnlocked =
              today.getMonth() === 11 && day <= today.getDate(); // Unlock only for days in December
            const isOpen = openDoors[day];

            return (
              <CalendarDoor
                key={index}
                isOpen={isOpen}
                isUnlocked={isUnlocked}
                onClick={isUnlocked ? () => handleDoorClick(day) : null} // Prevent clicking on locked doors
              >
                {day} {/* Always display the day number */}
              </CalendarDoor>
            );
          })}
        </CalendarContainer>
      </>

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
            {selectedDayContent.link && (
              <LinkButton
                href={selectedDayContent.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </LinkButton>
            )}
          </Card>
        </CardOverlay>
      )}
    </Container>
  );
};

export default AdventCalendarPage;
