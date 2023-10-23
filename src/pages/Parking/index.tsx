import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { ParkingApi } from '../../api/parking';
import {
  AIRPORT_CODE,
  AIRPORT_PARKING,
  AirportCodeType,
  ListItemType, PARKING_NAME, ParkingDataType, TERMINAL,
  TerminalType,
} from '../../constant';
import CongestionBar from '../../components/parking/CongestionBar';
import Search from '../../components/Search';
import { AirportParking, DEFAULT_CODE } from './constants';
import ImageView from '../../components/parking/ImageView';
import { parseParkingData } from '../../utils/parser';

type IncheonParkingApiResponseType = {
  datetm: string;
  floor: string;
  parking: string;
  parkingarea: string;
}

export function Parking() {
  const [
    selectedAirport,
    setSelectedAirport,
  ] = useState<ListItemType>({
    code: DEFAULT_CODE,
    name: AIRPORT_PARKING.INCHEON1,
    terminal: TERMINAL.T1,
  });
  const [parking, setParking] = useState<ParkingDataType[]>([]);

  const fetchData = async (code: AirportCodeType, terminal?: TerminalType) => {
    try {
      const response = await ParkingApi.fetchParking(code);
      if (code === AIRPORT_CODE.INCHEON) {
        const parkings = response.data.response.body.items
          .filter(
            (v: IncheonParkingApiResponseType) => (
              terminal === TERMINAL.T1
                ? v.floor.includes('T1')
                : v.floor.includes('T2')
            ),
          ).map((v: IncheonParkingApiResponseType) => ({
            name: v.floor,
            remain: Number(v.parkingarea) - Number(v.parking),
            all: Number(v.parkingarea),
          }));

        setParking(parkings);
      } else setParking(parseParkingData(response.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('fetchParkingApi error', error);
      // eslint-disable-next-line no-alert
      alert('fetchParkingApi error');
    }
  };

  const handleAirportSelect = (airport: ListItemType) => {
    setSelectedAirport(airport);
    fetchData(airport.code as AirportCodeType, airport.terminal);
  };

  useEffect(() => {
    fetchData(DEFAULT_CODE, TERMINAL.T1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Wrapper>
      <Search onAirportSelect={handleAirportSelect} options={AirportParking} />
      <ImageView
        airportCode={selectedAirport.code as AirportCodeType}
        terminalCode={selectedAirport.terminal as TerminalType}
      />
      <Styled.CongestionBarContainer>
        <Styled.Title>주차장</Styled.Title>
        {parking.map(
          (v: ParkingDataType) => (
            <Styled.CongestionBarWrapper key={v.name}>
              <Styled.CongestionBarTitle>{PARKING_NAME[v.name as keyof typeof PARKING_NAME] || '기타'}</Styled.CongestionBarTitle>
              <CongestionBar remain={v.remain} all={v.all} />
            </Styled.CongestionBarWrapper>
          ),
        )}
      </Styled.CongestionBarContainer>
    </Styled.Wrapper>
  );
}
