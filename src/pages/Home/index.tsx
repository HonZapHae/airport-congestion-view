import React, { useState } from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/Button';
import * as Styled from './styled';
import SwitchButton from '../../components/SwitchButton';
import { ReactComponent as Favicon } from '../../resources/icons/fav_icon.svg';
import CongestionMap from '../../components/home/CongestionMap';
import { DomesticFlightApi } from '../../api/domesticFlight';
import { IncheonAirportApi } from '../../api/incheonAirport';
import { ReactComponent as Refresh } from '../../resources/icons/refresh_icon.svg';
// import CongestionDesc from '../components/home/CongestionDesc';

export function Home() {
  const [selectedAirport, setSelectedAirport] = useState('김포국제공항');

  const handleAirportSelect = (airportName: string) => {
    setSelectedAirport(airportName);
  };

  const [fav, setFav] = useState(true);
  const clickFav = () => {
    setFav(!fav);
  };

  const [checked, setChecked] = useState(true);
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
    <Styled.StyledDiv>
      <SwitchButton id="test" checked={checked} onChange={onChange} />
      <Favicon fill={fav ? '#9744F7' : '#F6EFFF'} onClick={clickFav} />
      <CongestionMap airportCode="ICN" terminalCode={checked} />
      홈(혼잡행) 페이지
      <IconButton
        onClick={handleRefresh}
        sx={{
          '&.MuiButtonBase-root.MuiButton-root': {
            minWidth: '15px',
          },
        }}
        startIcon={<Refresh />}
      />
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
      <h2>국내선 탑승수속 소요시간안내</h2>
      <span>탑승까지 평균 체류기간</span>
      <Styled.Time>55분</Styled.Time>
    </Styled.StyledDiv>
  );
}
