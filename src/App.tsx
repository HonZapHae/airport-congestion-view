import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { Background, GlobalStyles } from './styled';
import { DomesticFlightApi } from '@/api/domesticFlight';
// import { IncheonAirportApi } from "@/api/incheonAirport";
import Splash from '@/components/Splash';
import { Router } from '@/shared/Router';

function App() {
  const [progress, setProgress] = useState<number>(0);
  const handleProgress = () => {
    setProgress(100);
  }
  /**
   * 국제선 api
   */
  useEffect(() => {
    handleProgress();
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
        <Splash progress={progress}/>
        <Router />
        <ToastContainer position="top-center" />
      </Background>
    </>
  );
}

export default App;
