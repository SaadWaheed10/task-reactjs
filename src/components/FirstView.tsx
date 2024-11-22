import React from "react";
import styled from "styled-components";
import robot from "../assets/images/robot.png";

export default function FirstView() {
  return (
    <ScreenContainer>
      {/* Left side: Image */}
      <ImageContainer>
        <CardImage src={robot} alt="Card" />
      </ImageContainer>

      {/* Right side: Content */}
      <ContentContainer>
        <Subtitle>Play Wonderverse</Subtitle>
        <Title>Wonderverse Season 0</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>

        {/* Dates */}
        <DateContainer>
          <DateItem>
            <DateTitle>Bidding Date</DateTitle>
            <DateValue>12/08/2024</DateValue>
          </DateItem>
          <DateItem>
            <DateTitle>Results</DateTitle>
            <DateValue>12/08/2024</DateValue>
          </DateItem>
          <DateItem>
            <DateTitle>Receive Rewards</DateTitle>
            <DateValue>12/08/2024</DateValue>
          </DateItem>
        </DateContainer>

        {/* Bidding Section */}
        <BidContainer>
          <AdjustButton>-</AdjustButton>
          <BidAmount>$1000</BidAmount>
          <AdjustButton>+</AdjustButton>
        </BidContainer>

        {/* Total Price and Bid Button */}
        <BidRow>
          <PriceContainer>
            <Total>Total Price: </Total>
            <Price>$49,346.56</Price>
          </PriceContainer>

          <BidButton>Place A Bid</BidButton>
        </BidRow>
      </ContentContainer>
    </ScreenContainer>
  );
}
const ScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  color: white;
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(135deg, #ffffff33, #7545ff33, #00000033);
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

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-left: 20px;
`;

const CardImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  object-fit: contain;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const Subtitle = styled.h4`
  color: #a084ff;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #b5b5b5;
  margin-bottom: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 100px;
  //   justify-content: space-between;
  margin-bottom: 20px;
`;

const DateItem = styled.div`
  text-align: center;
`;

const DateTitle = styled.p`
  font-size: 14px;
  color: #b5b5b5;
`;

const DateValue = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const BidContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  background: #333333;
  padding: 5px 10px;
  border-radius: 50px;
  width: 20%;
`;

const AdjustButton = styled.button`
  background: #242424;
  color: #ba83ff;
  border: 1px solid #555555;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #333333;
  }
`;

const BidAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const BidRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 200px;
`;

const BidButton = styled.button`
  background: #a084ff;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 50px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #915cf8;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Total = styled.p`
  font-size: 16px;
  color: #bc84ff;
`;
const Price = styled.p`
  font-size: 24px;
  margin-top: -12px;
`;
