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
  TerminalType,
} from '@/constants';
import { DEFAULT_CODE } from '@/constants';
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

  const getDomesticCongestion = (list:CongestionData[], code: AirportCodeType) => {
    // 혼잡도 맵에 넘겨줄 배열(국내선)
    const congestionValue = list.filter((item) => item.IATA_APCD === code);
    const congestionArray:CongestionLvlType[] = [];
    congestionArray.push(congestionValue[0].CGDR_ALL_LVL as CongestionLvlType);
    setCongestionList(congestionArray);
    setTime(congestionValue[0].PRC_HR);
  };

  const getInchoenCongestion = (list:number[], terminal?:boolean) => {
    // 혼잡도 맵에 넘겨줄 배열(인천)
    let congestionArray:CongestionLvlType[] = [];
    if (terminal === TERMINAL.T1) {
      congestionArray = list.map((item) => {
        if (item >= 1 && item <= 7000) {
          return 1;
        } if (item <= 7600) {
          return 2;
        } if (item <= 8600) {
          return 3;
        }
        return 4;
      });
    } else {
      congestionArray = list.map((item) => {
        if (item >= 1 && item <= 3200) {
          return 1;
        } if (item <= 3500) {
          return 2;
        } if (item <= 4000) {
          return 3;
        }
        return 4;
      });
    }
    return congestionArray;
  };

  const getTerminalData = (data:IncheonCongestionData, terminal?:TerminalType) => {
    const t1Keys = ['t1sum5', 't1sum6', 't1sum7', 't1sum8'];
    const t2Keys = ['t2sum3', 't2sum4'];
    let result = [];
    if (terminal === TERMINAL.T1) {
      result = t1Keys.map((key) => Number(data[key]));
    } else {
      result = t2Keys.map((key) => Number(data[key]));
    }
    setCongestionList(getInchoenCongestion(result, terminal));
  };

  const getInchoenValidData = (list:IncheonCongestionData[], terminal?:TerminalType) => {
    // 현재 시간에 맞는 인천 혼잡도 데이터 가져오기
    const now = new Date();
    const startDate = new Date();
    const endDate = new Date();
    const validData = list.find((item) => {
      const { atime } = item;
      startDate.setHours(Number(atime.split('_')[0]), 0, 0);
      if (atime === '23_00') endDate.setDate(endDate.getDate() + 1);
      endDate.setHours(Number(atime.split('_')[1]), 0, 0);
      return (now >= startDate && now < endDate) ? item : undefined;
    });
    setTime(`${startDate.getHours()}:00`);
    if (validData) getTerminalData(validData, terminal);
  };

  const DomesticFetchData = async (code: AirportCodeType) => {
    try {
      const response = await DomesticFlightApi.fetchDomesticFlight();
      getDomesticCongestion(response.data.data, code);
    } catch (error) {
      console.error('fetchDomesticFlightApi error', error);
    }
  };

  const IncheonFetchData = async (terminal?:TerminalType) => {
    try {
      const response = await IncheonAirportApi.fetchincheonAirport('0');
      getInchoenValidData(response.data.response.body.items, terminal);
    } catch (error) {
      console.error('fetchDomesticFlightApi error', error);
    }
  };

  const fetchData = (code: AirportCodeType, terminal?: TerminalType) => {
    if (code === AIRPORT_CODE.INCHEON) {
      IncheonFetchData(terminal);
    } else {
      DomesticFetchData(code);
    }
  };

  const handleAirportSelect = (airport: ListItemType) => {
    setSelectedAirport(airport);
    setChecked(false);
    fetchData(airport.code as AirportCodeType, airport.terminal as TerminalType);
  };

  // const clickFav = () => {
  //   setFav(!fav);
  // };

  const onChange = () => {
    setChecked(!checked);
    fetchData(selectedAirport.code as AirportCodeType, selectedAirport.terminal as TerminalType);
  };

  const handleRefresh = () => {
    fetchData(selectedAirport.code as AirportCodeType, selectedAirport.terminal as TerminalType);
  };

  useEffect(() => {
    setSelectedAirport({ ...selectedAirport, terminal: checked });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    fetchData(DEFAULT_CODE, TERMINAL.T1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
