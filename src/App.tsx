import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { DomesticFlightApi } from './api/domesticFlight';
// import { IncheonAirportApi } from "./api/incheonAirport";
import { Router } from './shared/Router';

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [value, setValue] = useState<number>(0);
  /**
   * 국제선 api
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DomesticFlightApi.fetchDomesticFlight();
        console.log('res', response);
      } catch (error) {
        console.error('fetchDomesticFlightApi error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Background>
      <Router />
    </Background>
  );
}

export default App;
