import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as ArrowLeft } from '../../resources/icons/icon-arrow-left.svg';

interface TipNavbarProps {
  title: string; // title 속성을 문자열로 정의
}

const NavBar = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  background-color: white;
  padding-top: 48px;
  padding-bottom: 16px;
  z-index: 33333;
`;

const Title = styled.div`
  color: #191919;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

export function TipNavbar({ title }: TipNavbarProps) {
  return (
    <NavBar>
      <ArrowLeft />
      <Title>{title}</Title>
    </NavBar>
  );
}
