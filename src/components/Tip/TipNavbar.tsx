import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../resources/icons/icon-arrow-left.svg';

interface TipNavbarProps {
  title: string; // title 속성을 문자열로 정의
}

const NavBar = styled.div`
  /* top: 0; */
  /* left: 0; */

  position: fixed;
  display: flex;
  background-color: white;
  /* margin: 0 auto; */

  z-index: 33333;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 16px;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #191919;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

export function TipNavbar({ title }: TipNavbarProps) {
  const navigate = useNavigate();
  return (
    <NavBar onClick={() => navigate(-1)}>
      <Container>
        <ArrowLeft />
        <Title>{title}</Title>
      </Container>
    </NavBar>
  );
}
