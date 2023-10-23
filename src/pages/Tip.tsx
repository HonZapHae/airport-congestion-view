import React from 'react';
import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as Checklist } from '../resources/icons/icon-checklist-24.svg';
import { ReactComponent as Ticket } from '../resources/icons/icon-ticket.svg';
import { ReactComponent as Car } from '../resources/icons/icon-car.svg';
import { ReactComponent as Exclamation } from '../resources/icons/icon-exclamation.svg';
import { ReactComponent as Luggage } from '../resources/icons/icon-luggage.svg';
import { ReactComponent as Scale } from '../resources/icons/icon-scale.svg';
import { ReactComponent as Bus } from '../resources/icons/icon-bus.svg';
import { ReactComponent as Phone } from '../resources/icons/icon-phone.svg';
import { ReactComponent as ArrowRight } from '../resources/icons/icon-arrow-right.svg';

const StyledDiv = styled.div`
  display: flex;;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 100%;
  margin-top: 74px;
`;

const Title = styled.div`
  font-size: 22px;
  line-height: 150%; 
  padding: 0 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const WrapperIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: #faf9fc;
  width: 100%;
  height: 112px;
  padding-bottom: 8px;
  text-align: center;
  font-size: 16px;
  line-height: 140%;
  color: #191919;
  cursor: pointer;
  &:hover {
    background-color: #f2f0f5;
  }
  &:active {
    background-color: #f2f0f5;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #f2f0f5;
  }
  &:active {
    background-color: #f2f0f5;
  }
`;
const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

`;

const Divider = styled.div`
width: 100%;

  height: 2px;
  background-color: #ECECEC;
`;

const ListItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export function Tip() {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Wrapper>
        <Title>
          알아두면 좋은
          {' '}
          <br />
          {' '}
          공항이용팁을 알려드릴게요
        </Title>
        <WrapperIcon>
          <IconBox
            onClick={() => {
              navigate('/checklist');
            }}
          >
            <Checklist style={{ marginTop: '18px' }} />
            해외출국 전
            {' '}
            <br />
            {' '}
            체크사항
          </IconBox>
          <IconBox
            onClick={() => {
              navigate('/departureprocess');
            }}
          >
            <Ticket />
            출국절차
          </IconBox>
          <IconBox
            onClick={() => {
              navigate('/parking');
            }}
          >
            <Car />
            주차정보
          </IconBox>
        </WrapperIcon>
        <List>
          <ListItem
            onClick={() => {
              navigate('/notallowed');
            }}
          >
            <ListItemContent>
              <ListItemLeft>
                <Exclamation />
                기내반입금지물품
              </ListItemLeft>
              <ArrowRight />
            </ListItemContent>
            <Divider />
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/essential');
            }}
          >
            <ListItemContent>
              <ListItemLeft>
                <Luggage />
                여행객 필수품 리스트
              </ListItemLeft>
              <ArrowRight />
            </ListItemContent>
            <Divider />
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/minbaggage');
            }}
          >
            <ListItemContent>
              <ListItemLeft>
                <Scale />
                최소 수하물
              </ListItemLeft>
              <ArrowRight />
            </ListItemContent>
            <Divider />
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/businfo');
            }}
          >
            <ListItemContent>
              <ListItemLeft>
                <Bus />
                공항 셔틀버스 안내
              </ListItemLeft>
              <ArrowRight />
            </ListItemContent>
            <Divider />
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/airportphone');
            }}
          >
            <ListItemContent>
              <ListItemLeft>
                <Phone />
                공항 상담번호
              </ListItemLeft>
              <ArrowRight />
            </ListItemContent>
          </ListItem>
        </List>
        <Outlet />
      </Wrapper>
    </StyledDiv>
  );
}
