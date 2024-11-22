import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #ffffff33, #7545ff33, #00000033);
  width: 90%;
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #c4c4c6;
`;

const ExploreButton = styled.button`
  background-color: transparent;
  border: 1px solid #c4c4c6;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  margin-bottom: 3rem;

  &:hover {
    background-color: #c4c4c6;
    color: black;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  background-color: #2c2c2e;
  padding: 2rem;
  border-radius: 12px;
  max-width: 260px;
  text-align: left;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensures cards take equal height */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #7d7d82;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #c4c4c6;
`;

export default function SecondView() {
  return (
    <Section>
      <Title>NFT Utility & Benefits Section</Title>
      <Subtitle>
        Owning an NFT grants premier access to the entire ecosystem, offering
        exclusive benefits like
      </Subtitle>
      <ExploreButton>Explore More</ExploreButton>
      <CardContainer>
        <Card>
          <CardIcon>📜</CardIcon>
          <CardTitle>Early Access</CardTitle>
          <CardText>
            For upcoming games on the platform, allowing holders to play,
            provide feedback, and influence game development.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🔑</CardIcon>
          <CardTitle>Exclusive Access</CardTitle>
          <CardText>
            To game modes with DUEL token rewards and wagering.
          </CardText>
        </Card>
        <Card>
          <CardIcon>🎟️</CardIcon>
          <CardTitle>Battle Pass For Life</CardTitle>
          <CardText>
            Which provides in-game rewards, loot boxes, lotteries, airdrops, and
            IRL prizes as you play.
          </CardText>
        </Card>
      </CardContainer>
    </Section>
  );
}
