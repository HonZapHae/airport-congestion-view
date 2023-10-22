import React, { useState, useEffect } from 'react';
import { Background } from './styled';
import { DomesticFlightApi } from './api/domesticFlight';
// import { IncheonAirportApi } from "./api/incheonAirport";
import { Router } from './shared/Router';

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
