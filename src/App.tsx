import React, { useEffect } from "react";

import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { DomesticFlightApi } from "./api/domesticFlight";
// import { IncheonAirportApi } from "./api/incheonAirport";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  /**
   * 국제선 api
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DomesticFlightApi.fetchDomesticFlight();
        console.log("res", response);
      } catch (error) {
        console.error("fetchDomesticFlightApi error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
