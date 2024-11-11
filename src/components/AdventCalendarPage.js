import React, { useState,  } from 'react'; //import useEffect to go live 
import styled, { keyframes } from 'styled-components';

// Sample content for each day
const calendarContent = [
  { day: 1, title: "Day 1: Kickoff!", videoLink: "https://www.youtube.com/embed/video1", link: "/link1" },
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

// Styled Components

// // Styled Components
// // Utility function to shuffle an array
// const shuffleArray = (array) => {
//   const shuffledArray = array.slice(); // Copy the array to avoid modifying the original
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background: #f2f2f2;
//   background-image: url('/advent/christmasbg.gif');
// `;

// const Title = styled.h1`
//   font-size: 2em;
//   color: #8b0000;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const ArrowContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
// `;

// const SnowflakeAnimation = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(10px); }
//   100% { transform: translateY(0); }
// `;

// const Snowflake = styled.div`
//   font-size: 2em;
//   color: #ffcccc;
//   animation: ${SnowflakeAnimation} 1.5s ease-in-out infinite;
//   margin: 0 5px;
// `;

// const CalendarContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 10px;
//   max-width: 400px;
//   width: 100%;
// `;

// const CalendarDoor = styled.div`
//   background: ${({ isOpen }) => (isOpen ? '#ffd700' : '#8b0000')};
//   color: #fff;
//   font-size: 1.2em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 80px;
//   border-radius: 8px;
//   cursor: ${({ isUnlocked }) => (isUnlocked ? 'pointer' : 'default')};
//   opacity: ${({ isUnlocked }) => (isUnlocked ? 1 : 0.5)};
//   transition: background 0.3s ease;
// `;

// const CardOverlay = styled.div`
//   display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.7);
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   color: #8b0000;
//   border-radius: 10px;
//   padding: 20px;
//   width: 90%;
//   max-width: 400px;
//   text-align: center;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   position: relative;
//   font-family: 'Merriweather', serif;
//   background-image: url('/advent/christmas.png');
//   background-repeat: no-repeat;
//   background-position: top center;
//   border: 4px solid #ff0000;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: #8b0000;
//   color: #ffffff;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

// const VideoFrame = styled.iframe`
//   width: 100%;
//   height: 200px;
//   border-radius: 10px;
//   margin-top: 10px;
// `;

// const LinkButton = styled.a`
//   display: inline-block;
//   margin-top: 15px;
//   padding: 10px 15px;
//   background: #ff0000;
//   color: #ffffff;
//   border-radius: 5px;
//   text-decoration: none;
//   font-weight: bold;
// `;

// const AdventCalendarPage = () => {
//   const [openDoors, setOpenDoors] = useState({});
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [shuffledDays, setShuffledDays] = useState([]);
//   const currentDate = new Date().getDate();

//   useEffect(() => {
//     // Shuffle days when the component mounts
//     setShuffledDays(shuffleArray(calendarContent));
//   }, []);

//   const handleDoorClick = (day) => {
//     if (day <= currentDate) {
//       setSelectedDay(day);
//       setOpenDoors((prev) => ({ ...prev, [day]: true }));
//     }
//   };

//   const handleCloseCard = () => {
//     setSelectedDay(null);
//   };

//   const selectedDayContent = selectedDay
//     ? calendarContent.find(dayContent => dayContent.day === selectedDay) || { title: "Content Not Found", videoLink: "", link: "#" }
//     : null;

//   return (
//     <Container>
//       <Title>Digital Advent Calendar</Title>
//       <ArrowContainer>
//         <Snowflake>❄️</Snowflake>
//         <Snowflake>❄️</Snowflake>
//       </ArrowContainer>
//       <CalendarContainer>
//         {shuffledDays.map(({ day }) => {
//           const isUnlocked = openDoors[day] || day <= currentDate;
//           const isOpen = isUnlocked;

//           return (
//             <CalendarDoor
//               key={day}
//               isOpen={isOpen}
//               onClick={() => handleDoorClick(day)}
//               isUnlocked={isUnlocked}
//             >
//               {isOpen ? day : '🎁'}
//             </CalendarDoor>
//           );
//         })}
//       </CalendarContainer>

//       {selectedDayContent && (
//         <CardOverlay isVisible={!!selectedDay}>
//           <Card>
//             <CloseButton onClick={handleCloseCard}>✖</CloseButton>
//             <h2>{selectedDayContent.title}</h2>
//             <VideoFrame
//               src={selectedDayContent.videoLink}
//               title={`Video for Day ${selectedDay}`}
//               aria-label={`Video for Day ${selectedDay}`}
//               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//             <LinkButton href={selectedDayContent.link} target="_blank" rel="noopener noreferrer">
//               Access Content
//             </LinkButton>
//           </Card>
//         </CardOverlay>
//       )}
//     </Container>
//   );
// };

// export default AdventCalendarPage;


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
  const currentDate = new Date().getDate();
  const testingMode = new Date().getMonth() === 10; // November

  const handleDoorClick = (day) => {
    if (testingMode || day <= currentDate) {
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
      <ArrowContainer>
        <Snowflake>❄️</Snowflake>
        <Snowflake>❄️</Snowflake>
      </ArrowContainer>
      <CalendarContainer>
        {Array.from({ length: 24 }, (_, index) => {
          const day = index + 1;
          const isUnlocked = openDoors[day] || testingMode || day <= currentDate;
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
