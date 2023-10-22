import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { StyledDiv } from './styled';

export function Layout() {
  return (
    <StyledDiv>
      <Outlet />
      <Navbar />
    </StyledDiv>
  );
}
