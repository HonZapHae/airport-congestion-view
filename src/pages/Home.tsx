import React, { useState } from 'react';
import styled from '@emotion/styled';
// import CongestionDesc from '../components/home/CongestionDesc';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AirPort = styled.div`
  font-size: 32px;
  margin-top: 120px;

`;

export function Home() {
  const [selectedAirport, setSelectedAirport] = useState('김포국제공항');

  const handleAirportSelect = (airportName: string) => {
    setSelectedAirport(airportName);
  };

  return (
    <StyledDiv>
      홈(혼잡행) 페이지
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
    </StyledDiv>
  );
}
