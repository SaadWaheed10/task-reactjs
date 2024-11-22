import React, { useState } from "react";
import styled from "styled-components";

export default function ThirdView() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  const toggleAnswer = () => {
    setIsAnswerVisible((prev) => !prev);
  };

  return (
    <Container>
      <Heading>Frequently Asked Questions</Heading>
      <QuestionContainer>
        <Row>
          <Question>What is an NFT Auction Page?</Question>
          <Dash onClick={toggleAnswer}>{isAnswerVisible ? "-" : "+"}</Dash>
        </Row>
        {isAnswerVisible && (
          <Answer>
            An NFT Staking Calculator is a tool that helps users estimate
            potential rewards from staking their NFTs, based on factors like
            staking duration, the type of NFT, and staking platform rates.
          </Answer>
        )}
      </QuestionContainer>
    </Container>
  );
}

const Container = styled.div`
  /* Gradient background with a "cloudy" effect */
  background: linear-gradient(135deg, #ffffff33, #7545ff33, #00000033);
  animation: gradientMove 15s ease infinite;
  width: 90%;
  padding: 50px 20px;
  color: #ffffff;
  text-align: center;
  font-family: "Inter", sans-serif;

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

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const QuestionContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Question = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Dash = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #bbbbbb;
  }
`;

const Answer = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #dddddd;
`;
