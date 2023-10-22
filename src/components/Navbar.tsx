import React, { useState } from 'react';
import {
  Tabs, Tab, createTheme, ThemeProvider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const theme = createTheme({
  palette: {
    background: {
      paper: '#631ec6',

    },
    text: {
      primary: '#a766f2',
    },
    secondary: {
      main: '#e9daff',
    },
  },
});

export function Navbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs textColor="secondary" sx={{ bgcolor: 'background.paper' }} TabIndicatorProps={{ sx: { top: 0, backgroundColor: 'secondary.main' } }} value={value} onChange={handleChange}>
        <Tab icon={<FlightIcon />} sx={{ color: 'text.primary' }} label="홈" to="/" component={Link} />
        <Tab icon={<DirectionsCarIcon />} sx={{ color: 'text.primary' }} label="주차장" to="/parking" component={Link} />
        <Tab icon={<LuggageIcon />} sx={{ color: 'text.primary' }} label="공항이용팁" to="/tip" component={Link} />
      </Tabs>
    </ThemeProvider>

  );
}
