import React from 'react';
import styled from '@emotion/styled';
import { TipNavbar } from '../../components/Tip/TipNavbar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: 393px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
margin-top: 104px;
padding-bottom: 80px;
gap: 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  background-color: #faf9fc;
  padding: 24px 20px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListTitle = styled.div`
  color: #191919;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.54px;
`;
const ListBody = styled.div`
  color: #191919;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export function AirportPhone() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="공항상담번호" />
        <Body>
          <List>
            <ListItem>
              <ListTitle>인천국제공항</ListTitle>
              <ListBody>1577-2600</ListBody>
            </ListItem>
            <ListItem>
              <ListTitle>김포공항</ListTitle>
              <ListBody>1661-2626</ListBody>
            </ListItem>
            <ListItem>
              <ListTitle>청주공항</ListTitle>
              <ListBody>043-210-6315</ListBody>
            </ListItem>
            <ListItem>
              <ListTitle>제주공항</ListTitle>
              <ListBody>1661-2626</ListBody>
            </ListItem>
            <ListItem>
              <ListTitle>김해공항</ListTitle>
              <ListBody>1661-2626</ListBody>
            </ListItem>
            <ListItem>
              <ListTitle>대구공항</ListTitle>
              <ListBody>053-980-5252</ListBody>
            </ListItem>
          </List>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
