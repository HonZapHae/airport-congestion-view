import { useState } from 'react';
import styled from '@emotion/styled';
import { TipNavbar } from '@/components/Tip/TipNavbar';
import Bag from '@/resources/icons/icon-bag.svg?react';
import Bottle from '@/resources/icons/icon-bottle.svg?react';
import Carrier from '@/resources/icons/icon-carrier.svg?react';
import Luggages from '@/resources/icons/icon-luggages.svg?react';
import BabyPackage from '@/resources/icons/icon-baby-package.svg?react';
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

const Summery = styled.div`
  color: #191919;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
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
    background-color: #F8F5FF;
  }
  &:active {
    background-color: #F8F5FF;
  }
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ListBody = styled.div`
  color: #191919;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; 
`;

const TitleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ButtonArrow = styled.div`
  
`;

export function Minbaggage() {
  const [isAccodian, setIsAccodian] = useState({
    bag: false,
    bottle: false,
    carrier: false,
    luggages: false,
    babyPackage: false,
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
        <TipNavbar title="최소 수하물" />
        <Body>
          <Summery>
            휴대수하물과 위탁수하물의 무게 및 크기는 항공사 마다 허용 개수도
            다르고 구입한 항공권 운임에 따라 그 무게가 달라요. 관련 내용은 해당
            홈페이지를 확인 해주세요!
          </Summery>
          <List>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('bag')}>
                <TitleItem>
                  <IconBox>
                    <Bag />
                  </IconBox>
                  <Label>휴대수하물 개수</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.bag ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.bag ? (
                <ListBody>
                  소형가방, 핸드백, 노트북, 면세쇼핑백 등은 추가로 휴대할 수
                  있어요. 단 모든 무게의 합이 항공사의 휴대 수하물 허용무게를
                  넘어서는 안되며 세부 내용은 항공사마다 달라요.
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('bottle')}>
                <TitleItem>
                  <IconBox>
                    <Bottle />
                  </IconBox>
                  <Label>기내 반입 가능한 액체류</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.bottle ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.bottle ? (
                <ListBody>
                  개별 용기당 100ml 이하로, 1인당 총 1L 용량의 비닐 지퍼백 1개에
                  담아야해요. 헤어왁스나 로션 등 젤 형태의 액체도 액체류로
                  분류돼요.
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('carrier')}>
                <TitleItem>
                  <IconBox>
                    <Carrier />
                  </IconBox>
                  <Label>휴대수하물 보관</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.carrier ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.carrier ? (
                <ListBody>
                  큰 짐은 머리 위 선반에 넣고, 작은 짐은 비행기 앞 좌석
                  아랫부분에 넣어두어요. 항공기 이 착륙을 할 때 혹은 위험 상황
                  발생 시 안전을 위한 조치에요
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('luggages')}>
                <TitleItem>
                  <IconBox>
                    <Luggages />
                  </IconBox>
                  <Label>초과 또는 특수 수하물</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.luggages ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.luggages ? (
                <ListBody>
                  반입하는 수하물 종류와 무게 등에 따라 요금 부과 방법이
                  달라지므로 이용하는 항공사에 연락하여 확인하기를 추천해요.
                  초과 수하물의 경우 사전에 미리 구입하는 것이 가장 저렴해요
                </ListBody>
              ) : null}
            </ListItem>
            <ListItem>
              <ListTitle onClick={() => toggleAccodian('babyPackage')}>
                <TitleItem>
                  <IconBox>
                    <BabyPackage />
                  </IconBox>
                  <Label>유소아 짐</Label>
                </TitleItem>
                <ButtonArrow>
                  {isAccodian.babyPackage ? <ArrowTop /> : <ArrowDown />}
                </ButtonArrow>
              </ListTitle>
              {isAccodian.babyPackage ? (
                <ListBody>
                  소아의 경우 성인과 허용량이 동일하여 유아의 경우 보통 무게
                  10kg 이내 짐 1개와 접을 수 있는 유모차나 유아용 카시트, 유아
                  운반용 요람 중 1개를 추가로 허용하고 있어요. 다만, 이 역시
                  세부 규정은 항공사마다 다 다르므로 이용하는 항공사의
                  홈페이지를 확인하는 것을 추천해요
                </ListBody>
              ) : null}
            </ListItem>
          </List>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
