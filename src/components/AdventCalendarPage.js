import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Sample content for each day
const calendarContent = [
  { day: 1, title: "Day 1: Welcome and Thank you!", videoLink: "https://www.youtube.com/embed/Gm3uwL6shYs?si=OVb2HzCrmMYt2k7o" },
  { day: 2, title: "Day 2: Christmas survival kit", videoLink: "https://www.youtube.com/embed/4QpZB9gTsgI?si=rUxzabQh_SZvqYU6", isMailchimpForm: true },
  { day: 3, title: "Day 3: Take care of it ", videoLink: "https://www.youtube.com/embed/7EAz4bba3VA?si=TiJWaAyhGXqTCYK3", link: "" },
  { day: 4, title: "Day 4: 12 days of christmas", videoLink: "https://www.youtube.com/embed/LZBXc_Th-ts?si=y6Ou1SgSGYXCj1aj", link: "https://drive.google.com/file/d/1lAWpZpDomYVkE69uW_4lOcZ4gJ8y3hi_/view?usp=sharing" },
  { day: 5, title: "Day 5: Christmas Recipe", videoLink: "https://www.youtube.com/embed/vN7NLBHuRbs?si=JMjZH91wuooLb3De", link: "https://drive.google.com/file/d/1Wh6vWzyf4GjNNsWRrfpmzZakmNaocjGX/view?usp=sharing" },
  { day: 6, title: "Day 6: Stay active", videoLink: "https://www.youtube.com/embed/tqm1QsQxGYw?si=JMBBagCKTpF5Subq", link: "https://drive.google.com/file/d/1gAyBWH4GDcdsJKY0FNtDzHPK3qvEZ3O9/view?usp=sharing" },
  { day: 7, title: "Day 7: No bad workout", videoLink: "https://www.youtube.com/embed/9gZXrbCutWw?si=TNqXjAHIWDMLOOm5", link: "" },
  { day: 8, title: "Day 8: Lets get personal", videoLink: "https://www.youtube.com/embed/tqjs_f3P610?si=zBzjdE9zmxmbkm1E", link: "mailto:support@acetemple.com" },
  { day: 9, title: "Day 9: Tis a Challenge", videoLink: "https://www.youtube.com/embed/ShwXCK94290?si=K_E-WR7SPWaPqdJE", link: "" },
  { day: 10, title: "Day 10: Productivity Hack", videoLink: "https://www.youtube.com/embed/Pi1hve7hokI?si=-ESj7GFLLAyE3xFR", link: "" },
  { day: 11, title: "Day 11: Clients Testimonial ", videoLink: "https://www.youtube.com/embed/2dRgbOOOSGQ?si=_NdplyMrYQ5OhuBz", link: "" },
  { day: 12, title: "Day 12: Post Feast Digestion ", videoLink: "https://www.youtube.com/embed/-SX75X9z2rw?si=akhUi8GfPZYFMWHC", link: "" },
  { day: 13, title: "Day 13: Warm-Up", videoLink: "https://www.youtube.com/embed/video2", link: "/link2" },
  { day: 14, title: "Day 14: Progress Tracker", videoLink: "https://www.youtube.com/embed/hx7vOJ2w-_M?si=KO9AO1ly8y1rqrAd", link: "https://drive.google.com/file/d/1FZnUFQJbNtAFVgeuKPE1G_WACgz4EEGc/view?usp=sharing" },
  { day: 15, title: "Day 15: Let the transformation begin", videoLink: "https://www.youtube.com/embed/l-1gHk8C9IM?si=fzMHYzg-1O1zofKn", link: "/transformation-start-here" },
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
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    setShuffledDays(shuffleArray(calendarContent));
  }, []);

  useEffect(() => {
    const savedOpenDoors = JSON.parse(localStorage.getItem("openDoors")) || {};
    setOpenDoors(savedOpenDoors);
  }, []);

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
            {selectedDayContent.link && (
              <a
                href={selectedDayContent.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "10px",
                  display: "inline-block",
                  padding: "10px 15px",
                  backgroundColor: "#ff0000",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                {selectedDayContent.day === 8
                  ? "Get in Touch"
                  : selectedDayContent.day === 15
                  ? "Claim Your Transformation"
                  : "View PDF"}
              </a>
            )}
          </Card>
        </CardOverlay>
      )}
    </Container>
  );
};

export default AdventCalendarPage;
