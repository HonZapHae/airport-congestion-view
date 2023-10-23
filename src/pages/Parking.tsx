import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import CongestionBar from '../components/parking/CongestionBar';
import { IncheonParkingApi } from '../api/parking';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Parking() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await IncheonParkingApi.fetchincheonParking();
        console.log('res', response);
      } catch (error) {
        console.error('fetchDomesticFlightApi error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <StyledDiv>
      주차장 페이지
      <CongestionBar />
    </StyledDiv>
  );
}
