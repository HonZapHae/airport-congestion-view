import { useState } from 'react';
import IconButton from '@mui/material/Button';
import { AirportName } from './constants';
import * as Styled from './styled';
import { CongestionData, DomesticFlightApi } from '@/api/domesticFlight';
import { IncheonAirportApi, IncheonCongestionData } from '@/api/incheonAirport';
import CongestionDesc from '@/components/home/CongestionDesc';
import CongestionMap from '@/components/home/CongestionMap';
import Search from '@/components/Search';
import SwitchButton from '@/components/SwitchButton';
import {
  AIRPORT_CODE,
  AIRPORT_PARKING,
  AirportCodeType,
  CongestionLvlType,
  ListItemType,
  TERMINAL,
} from '@/constants';
// import Favicon from '@/resources/icons/fav_icon.svg?react';
import Refresh from '@/resources/icons/refresh_icon.svg?react';
import Airplane from '@/resources/icons/airplane_small_icon.svg?react';

export function Home() {
  const [
    selectedAirport,
    setSelectedAirport,
  ] = useState<ListItemType>({
    code: AIRPORT_CODE.INCHEON,
    name: AIRPORT_PARKING.INCHEON1,
    terminal: TERMINAL.T1,
  });
  // const [fav, setFav] = useState(true);
  const [checked, setChecked] = useState(false);
  const [congestionList, setCongestionList] = useState<CongestionLvlType[]>([]);
  const [time, setTime] = useState('00:00');
  const getDomesticCongestion = (list:CongestionData[], airport:ListItemType) => {
    // 혼잡도 맵에 넘겨줄 배열(국내선)
    const congestionValue = list.filter((item) => item.IATA_APCD === airport.code);
    const valueArray:CongestionLvlType[] = [];
    valueArray.push(congestionValue[0].CGDR_ALL_LVL as CongestionLvlType);
    setCongestionList(valueArray);
    setTime(congestionValue[0].PRC_HR);
  };

  const getInchoenValidData = (list:IncheonCongestionData[]) => {
    // 현재 시간에 맞는 인천 혼잡도 데이터 가져오기
    const now = new Date(); // 현재 시간
    const startDate = new Date();
    const endDate = new Date();
    const validData = list.find((item) => {
      const { atime } = item;
      startDate.setHours(Number(atime.split('_')[0]), 0, 0);
      if (atime === '23_00') endDate.setDate(endDate.getDate() + 1);
      endDate.setHours(Number(atime.split('_')[1]), 0, 0);
      return (now >= startDate && now < endDate) ? item : undefined;
    });
    // TODO : 혼잡도 맵에 넘겨줄 배열 만들어줄 로직 개발 필요
    if (validData) console.log(validData);
  };

  const DomesticFetchData = async (airport:ListItemType) => {
    try {
      const response = await DomesticFlightApi.fetchDomesticFlight();
      getDomesticCongestion(response.data.data, airport);
    } catch (error) {
      console.error('fetchDomesticFlightApi error', error);
    }
  };

  const IncheonFetchData = async () => {
    try {
      const response = await IncheonAirportApi.fetchincheonAirport('0');
      getInchoenValidData(response.data.response.body.items);
    } catch (error) {
      console.error('fetchDomesticFlightApi error', error);
    }
  };
  const handleAirportSelect = (airport: ListItemType) => {
    // TODO : 인천일 경우 터미널 정보 세팅 필요
    setSelectedAirport(airport);
    setChecked(false);
    if (airport.code === AIRPORT_CODE.INCHEON) {
      IncheonFetchData();
    } else {
      DomesticFetchData(airport);
    }
  };

  // const clickFav = () => {
  //   setFav(!fav);
  // };

  const onChange = () => {
    setChecked(!checked);
  };

  const handleRefresh = () => {
    DomesticFetchData(selectedAirport);
  };

  return (
    <Styled.Wrapper>
      <Search onAirportSelect={handleAirportSelect} options={AirportName} />
      <Styled.Header>
        {selectedAirport.code === AIRPORT_CODE.INCHEON && (
          <Styled.Switch>
            <SwitchButton checked={checked} onChange={onChange} />
          </Styled.Switch>
        )}
      </Styled.Header>
      <CongestionMap
        airportCode={selectedAirport.code as AirportCodeType}
        terminalCode={!checked}
        congestionArray={congestionList}
      />
      <Styled.CongestionDescWrapper>
        <Styled.RefreshWrapper>
          <Styled.RefreshDesc>
            {time}
            {' '}
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
        <CongestionDesc />
      </Styled.CongestionDescWrapper>
      <Styled.NotificationWrapper>
        <Airplane />
        <Styled.Notification>
          국내선 탑승수속
          {' '}
          <Styled.NotificationPuple>소요시간 </Styled.NotificationPuple>
          안내
        </Styled.Notification>

      </Styled.NotificationWrapper>
      <Styled.StayTime>
        탑승까지 평균 체류기간
      </Styled.StayTime>
      <Styled.TimeWrapper>
        <Styled.Time>55</Styled.Time>
        <Styled.Minute>분</Styled.Minute>
      </Styled.TimeWrapper>
    </Styled.Wrapper>
  );
}
