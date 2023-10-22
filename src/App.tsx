import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { DomesticFlightApi } from './api/domesticFlight';
// import { IncheonAirportApi } from "./api/incheonAirport";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [value, setValue] = useState(0);
  // /**
  //  * 국제선 api
  //  */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await DomesticFlightApi.fetchDomesticFlight();
  //       console.log('res', response);
  //     } catch (error) {
  //       console.error('fetchDomesticFlightApi error', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Background>
      <Container fixed sx={{ maxWidth: '425px' }}>
        <Box>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="홈" />
            <BottomNavigationAction label="주차장" />
            <BottomNavigationAction label="공항이용팁" />
          </BottomNavigation>
        </Box>
      </Container>
    </Background>
  );
}

export default App;
