import React, { useState } from 'react';
import IconButton from '@mui/material/Button';
import { AirportName } from './constants';
import * as Styled from './styled';
import { DomesticFlightApi } from '../../api/domesticFlight';
import { IncheonAirportApi } from '../../api/incheonAirport';
import CongestionDesc from '../../components/home/CongestionDesc';
import CongestionMap from '../../components/home/CongestionMap';
import Search from '../../components/Search';
import SwitchButton from '../../components/SwitchButton';
import {
  AIRPORT_CODE,
  AIRPORT_PARKING,
  AirportCodeType,
  ListItemType,
  TERMINAL,
} from '../../constant';
import { ReactComponent as Favicon } from '../../resources/icons/fav_icon.svg';
import { ReactComponent as Refresh } from '../../resources/icons/refresh_icon.svg';

export function Home() {
  const [
    selectedAirport,
    setSelectedAirport,
  ] = useState<ListItemType>({
    code: AIRPORT_CODE.INCHEON,
    name: AIRPORT_PARKING.INCHEON1,
    terminal: TERMINAL.T1,
  });
  const [fav, setFav] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleAirportSelect = (airport: ListItemType) => {
    setSelectedAirport(airport);
    setChecked(false);
  };

  const clickFav = () => {
    setFav(!fav);
  };

  const onChange = () => {
    setChecked(!checked);
  };

  const handleRefresh = () => {
    const fetchData = async () => {
      try {
        const response = await DomesticFlightApi.fetchDomesticFlight();
        console.log('res', response);
      } catch (error) {
        console.error('fetchDomesticFlightApi error', error);
      }
    };

    fetchData();
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
        <Styled.Favorite>
          <Favicon fill={fav ? '#9744F7' : '#F6EFFF'} onClick={clickFav} />
        </Styled.Favorite>
      </Styled.Header>
      <CongestionMap
        airportCode={selectedAirport.code as AirportCodeType}
        terminalCode={!checked}
      />
      <Styled.CongestionDescWrapper>
        <Styled.RefreshWrapper>
          <Styled.RefreshDesc>PM 1:30 업데이트 됨</Styled.RefreshDesc>
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
    </Styled.Wrapper>
  );
}
