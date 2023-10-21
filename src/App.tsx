import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import logo from './logo.svg';
import { DomesticFlightApi } from './api/domesticFlight';
// import { IncheonAirportApi } from "./api/incheonAirport";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  const [value, setValue] = useState(0);
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
    <div className="App">
      <Container fixed>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>
            Edit
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
          </Title>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
    </div>
  );
}

export default App;
