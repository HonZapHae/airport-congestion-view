import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Router } from './shared/Router';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

function App() {
  return (
    <div>
      <Title>혼잡행</Title>
      <Router />
    </div>
  );
}

export default App;
