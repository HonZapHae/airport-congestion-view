import { useEffect } from 'react';
import { Global } from '@emotion/react';
import { Background, GlobalStyles } from './styled';
import { DomesticFlightApi } from '@/api/domesticFlight';
// import { IncheonAirportApi } from "@/api/incheonAirport";
import { Router } from '@/shared/Router';

function App() {
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
    <>
      <Global styles={GlobalStyles} />
      <Background>
        <Router />
      </Background>
    </>
  );
}

export default App;
