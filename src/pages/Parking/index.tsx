import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IconButton from '@mui/material/Button';
import * as Styled from './styled';
import { ParkingApi } from '@/api/parking';
import {
  AIRPORT_CODE,
  AIRPORT_PARKING,
  AirportCodeType,
  ListItemType,
  PARKING_NAME,
  ParkingDataType,
  TERMINAL,
  TerminalType,
} from '@/constants';
import CongestionBar from '@/components/parking/CongestionBar';
import Search from '@/components/Search';
import ParkingPrice from '@/components/parking/Price/ParkingPrice';
import { AirportParking } from './constants';
import ImageView from '@/components/parking/ImageView';
import { DEFAULT_CODE } from '@/constants';
import Car from '@/resources/icons/icon-car.svg?react';
import Refresh from '@/resources/icons/refresh_icon.svg?react';
import { parseParkingData } from '@/utils/parser';

type IncheonParkingApiResponseType = {
  datetm: string;
  floor: string;
  parking: string;
  parkingarea: string;
};

export function Parking() {
  const [selectedAirport, setSelectedAirport] = useState<ListItemType>({
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
          .filter((v: IncheonParkingApiResponseType) =>
            terminal === TERMINAL.T1
              ? v.floor.includes('T1')
              : v.floor.includes('T2'),
          )

          .map((v: IncheonParkingApiResponseType) => ({
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
      toast.error(
        '주차장 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
      );
    }
  };

  const handleAirportSelect = (airport: ListItemType) => {
    setSelectedAirport(airport);
    fetchData(airport.code as AirportCodeType, airport.terminal);
  };

  const notify = (message: string) => {
    toast(message);
  };

  const handleRefresh = () => {
    fetchData(
      selectedAirport.code as AirportCodeType,
      selectedAirport.terminal,
    );
    notify('주차장 정보를 업데이트했습니다.');
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
        <Styled.TitleContainer>
          <Styled.TitleWrapper>
            <Car />
            <Styled.Title>주차장 혼잡도 안내</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.RefreshWrapper>
            <Styled.RefreshDesc>
              {new Date().toLocaleString('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
              })}
              업데이트 됨
            </Styled.RefreshDesc>
            <IconButton
              onClick={handleRefresh}
              sx={{
                '&.MuiButtonBase-root.MuiButton-root': {
                  minWidth: '17px',
                  padding: 0,
                },
                '& .MuiButton-startIcon': {
                  margin: '0px',
                },
              }}
              startIcon={<Refresh />}
            />
          </Styled.RefreshWrapper>
        </Styled.TitleContainer>
        {parking.map((v: ParkingDataType) => (
          <Styled.CongestionBarWrapper key={v.name}>
            <Styled.CongestionBarTitle>
              {PARKING_NAME[v.name as keyof typeof PARKING_NAME] || '기타'}
            </Styled.CongestionBarTitle>
            <CongestionBar remain={v.remain} all={v.all} />
          </Styled.CongestionBarWrapper>
        ))}
        <ParkingPrice />
      </Styled.CongestionBarContainer>
    </Styled.Wrapper>
  );
}
