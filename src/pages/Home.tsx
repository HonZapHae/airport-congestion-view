import React, { useState } from 'react';
import styled from '@emotion/styled';
import Search from '../components/Search';
// import CustomizedSwitches from '../components/CoutomSwitch';

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
    <>
      <Search onAirportSelect={handleAirportSelect} />
      <AirPort>{selectedAirport}</AirPort>
      <StyledDiv>홈(혼잡행) 페이지</StyledDiv>
    </>
  );
}
