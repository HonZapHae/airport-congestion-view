import { useState } from 'react';
import styled from '@emotion/styled';
import { TipNavbar } from '@/components/Tip/TipNavbar';
import ArrowTop from '@/resources/icons/icon-arrow-top.svg?react';
import ArrowDown from '@/resources/icons/icon-arrow-down.svg?react';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
  gap: 14px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  background-color: #faf9fc;
  padding: 24px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f8f5ff;
  }
  &:active {
    background-color: #f8f5ff;
  }
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const ListBodyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BodyTitle = styled.div`
  color: #191919;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; 
`;
const BodyText = styled.div`
  color: #191919;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; 
`;

const TitleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const Label = styled.div`
  color: #191919;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.54px;
`;

const ButtonArrow = styled.div`
  
`;

export function Businfo() {
  const [isAccodian, setIsAccodian] = useState({
    inc: false,
    gim: false,
    jej: false,
    chj: false,
    kim: false,
    dae: false,
  });

  const toggleAccodian = (item: keyof typeof isAccodian) => {
    setIsAccodian((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="공항셔틀버스 안내" />
        <Body>
          <List>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('inc')}>
                <TitleItem>
                  <Label>인천국제공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.inc ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.inc ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyTitle>정차장</BodyTitle>
                    <BodyText>
                      제 1여객터미널 3F 중앙(8번 부근),
                      {' '}
                      <br />
                      제 2여객터미널 3F
                      중앙(4~5번 부근)
                    </BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>이용요금</BodyTitle>
                    <BodyText>무료</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>운행간격</BodyTitle>
                    <BodyText>10분</BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('kim')}>
                <TitleItem>
                  <Label>김포공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.kim ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.kim ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyTitle>정차장</BodyTitle>
                    <BodyText>
                      국제선 5번,
                      {' '}
                      <br />
                      국내선 8번
                    </BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>이용요금</BodyTitle>
                    <BodyText>무료</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>운행간격</BodyTitle>
                    <BodyText>
                      • 여객 + 화물청사
                      {' '}
                      <br />
                      {' '}
                      06:00 ~ 07:00 - 25분
                      {' '}
                      <br />
                      07:00 ~ 21:00 - 15~20분
                      {' '}
                      <br />
                      {' '}
                      21:00 ~ 23:00 - 25분
                    </BodyText>
                    <BodyText>
                      • 여객청사전용
                      {' '}
                      <br />
                      {' '}
                      08:00 ~ 23:00 (여객청사전용) - 12~
                      15분
                    </BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>

            <ListItem>
              <ListTitle onClick={() => toggleAccodian('jej')}>
                <TitleItem>
                  <Label>제주공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.jej ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.jej ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyText>공항셔틀버스를 운행하지 않아요.</BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('chj')}>
                <TitleItem>
                  <Label>청주공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.chj ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.chj ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyTitle>정차장</BodyTitle>
                    <BodyText>청주공항 3번 게이트</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>이용요금</BodyTitle>
                    <BodyText>무료</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>운행간격</BodyTitle>
                    <BodyText>20분</BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('kim')}>
                <TitleItem>
                  <Label>김해공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.kim ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.kim ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyTitle>정차장</BodyTitle>
                    <BodyText>1번 게이트</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>이용요금</BodyTitle>
                    <BodyText>무료</BodyText>
                  </ListBodyItem>
                  <ListBodyItem>
                    <BodyTitle>운행간격</BodyTitle>
                    <BodyText>10분</BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('dae')}>
                <TitleItem>
                  <Label>대구공항</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.dae ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.dae ? (
                <ListBody>
                  <ListBodyItem>
                    <BodyText>공항셔틀버스를 운행하지 않아요</BodyText>
                  </ListBodyItem>
                </ListBody>
              ) : null}
            </ListItem>
          </List>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
