import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Sample content for each day
const calendarContent = [
  { day: 1, title: "Day 1: Welcome and Thank you!", videoLink: "https://www.youtube.com/embed/Gm3uwL6shYs?si=OVb2HzCrmMYt2k7o" },
  { day: 2, title: "Day 2: Christmas survival kit", videoLink: "https://www.youtube.com/embed/4QpZB9gTsgI?si=rUxzabQh_SZvqYU6", isMailchimpForm: true },
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
// Fisher-Yates Shuffle
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
  background-image: url("/advent/christmasbg.gif");
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  width: 100%;
`;

const CalendarDoor = styled.div`
  background: ${({ isOpen }) => (isOpen ? "#ffd700" : "#8b0000")};
  color: #fff;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 8px;
  cursor: ${({ isUnlocked }) => (isUnlocked ? "pointer" : "default")};
  opacity: ${({ isUnlocked }) => (isUnlocked ? 1 : 0.5)};
  transition: background 0.3s ease;
`;

const CardOverlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
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
  font-family: "Merriweather", serif;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-top: 10px;
`;

const DebugButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c9302c;
  }
`;

// Main Component
const AdventCalendarPage = () => {
  const [openDoors, setOpenDoors] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [shuffledDays, setShuffledDays] = useState([]);
  const [debugMode, setDebugMode] = useState(false); // Debug Mode for testing

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
    if (debugMode || (today.getMonth() === 11 && day <= today.getDate())) {
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
      }
    : null;

  return (
    <Container>
      <Title>🎄 Welcome to the Fitmas Countdown! 🎅💪</Title>

      {/* Show Debug Button only in non-production environments */}
      {process.env.NODE_ENV !== "production" && (
        <DebugButton onClick={() => setDebugMode(!debugMode)}>
          {debugMode ? "Disable Debug Mode" : "Enable Debug Mode"}
        </DebugButton>
      )}

      <CalendarContainer>
        {shuffledDays.map((content, index) => {
          const day = content.day;
          const today = new Date();
          const isUnlocked = debugMode || (today.getMonth() === 11 && day <= today.getDate());
          const isOpen = openDoors[day];

          return (
            <CalendarDoor
              key={index}
              isOpen={isOpen}
              isUnlocked={isUnlocked}
              onClick={isUnlocked ? () => handleDoorClick(day) : null}
            >
              {day}
            </CalendarDoor>
          );
        })}
      </CalendarContainer>

      {selectedDayContent && (
        <CardOverlay isVisible={!!selectedDay}>
          <Card>
            <button onClick={handleCloseCard}>✖ Close</button>
            <h2>{selectedDayContent.title}</h2>
            <VideoFrame
              src={selectedDayContent.videoLink}
              title={`Video for Day ${selectedDay}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            {selectedDayContent.isMailchimpForm && (
              <form
                action="https://acetemple.us16.list-manage.com/subscribe/post?u=9a2533ed7418a68b40bc24d2f&amp;id=f5240a6b61&amp;f_id=002b19e0f0"
                method="post"
                target="_blank"
              >
                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name">First Name:</label>
                  <input
                    type="text"
                    name="FNAME"
                    id="name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <button type="submit">Download Now</button>
              </form>
            )}
          </Card>
        </CardOverlay>
      )}
    </Container>
  );
};

export default AdventCalendarPage;