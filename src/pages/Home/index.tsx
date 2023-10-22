import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as Styled from './styled';
// import CongestionDesc from '../components/home/CongestionDesc';

export function Home() {
  const [selectedAirport, setSelectedAirport] = useState('김포국제공항');

  const handleAirportSelect = (airportName: string) => {
    setSelectedAirport(airportName);
  };

  return (
    <Styled.StyledDiv>
      홈(혼잡행) 페이지
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
      <h2>국내선 탑승수속 소요시간안내</h2>
      <span>탑승까지 평균 체류기간</span>
      <Styled.Time>55분</Styled.Time>
    </Styled.StyledDiv>
  );
}
