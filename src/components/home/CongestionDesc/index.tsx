import React, { useState } from 'react';
import * as Styled from './styled';
import Congestion from './Congestion';
import { CONGESTION_DESC_INFO } from './constants';
import Search from '../../Search';

function CongestionDesc() {
  const [selectedAirport, setSelectedAirport] = useState('김포국제공항');

  const handleAirportSelect = (airportName: string) => {
    setSelectedAirport(airportName);
  };
  return (
    <Styled.Container>
      <Styled.CongestionWrapper>
        <Search onAirportSelect={handleAirportSelect} />
        {/* <AirPort>{selectedAirport}</AirPort> */}
        {CONGESTION_DESC_INFO.map(({ color, title }) => (
          <Congestion color={color} title={title} />
        ))}
      </Styled.CongestionWrapper>
    </Styled.Container>
  );
}

export default CongestionDesc;
