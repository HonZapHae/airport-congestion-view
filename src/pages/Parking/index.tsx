import React, { useState } from 'react';
import * as Styled from './styled';
import {
  AIRPORT_CODE,
  AIRPORT_PARKING,
  AirportCodeType,
  ListItemType, TERMINAL,
  TerminalType,
} from '../../constant';
import CongestionBar from '../../components/parking/CongestionBar';
import Search from '../../components/Search';
import { AirportParking } from './constants';
import ImageView from '../../components/parking/ImageView';

export function Parking() {
  const [
    selectedAirport,
    setSelectedAirport,
  ] = useState<ListItemType>({
    code: AIRPORT_CODE.INCHEON,
    name: AIRPORT_PARKING.INCHEON1,
    terminal: TERMINAL.T1,
  });

  const handleAirportSelect = (airport: ListItemType) => {
    setSelectedAirport(airport);
  };

  return (
    <Styled.Wrapper>
      <Search onAirportSelect={handleAirportSelect} options={AirportParking} />
      <ImageView
        airportCode={selectedAirport.code as AirportCodeType}
        terminalCode={selectedAirport.terminal as TerminalType}
      />
      <CongestionBar />
    </Styled.Wrapper>
  );
}
