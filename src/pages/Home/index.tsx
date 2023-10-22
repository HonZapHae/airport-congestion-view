import React, { useState } from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/Button';
import { DomesticFlightApi } from '../../api/domesticFlight';
import Search from '../../components/Search';
// import CongestionDesc from '../components/home/CongestionDesc';

const AirPort = styled.div`
  font-size: 32px;
  margin-top: 120px;
`;

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
      <Search onAirportSelect={handleAirportSelect} />
      <AirPort>{selectedAirport}</AirPort>
      <CongestionMap airportCode="ICN" terminalCode={checked} />
      홈(혼잡행) 페이지
      <IconButton
        onClick={handleRefresh}
        sx={{
          '&.MuiButtonBase-root.MuiButton-root': {
            minWidth: '15px',
          },
          '& .MuiButton-startIcon': {
            margin: '0px',
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
