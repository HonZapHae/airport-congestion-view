import React, { useState } from 'react';
import {
  Tabs, Tab, createTheme, ThemeProvider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as Airplane } from '../resources/icons/airplane_icon.svg';
import { ReactComponent as Car } from '../resources/icons/car_icon.svg';
import { ReactComponent as Luggage } from '../resources/icons/luggage_icon.svg';

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
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        textColor="secondary"
        variant="fullWidth"
        sx={{
          '& .MuiTabs-flexContainer': { height: 100 }, bgcolor: 'background.paper', height: 100, width: 390,
        }}
        TabIndicatorProps={{ sx: { top: 0, backgroundColor: 'secondary.main' } }}
        value={value}
        onChange={handleChange}
      >
        <Tab icon={<Airplane fill={value === 0 ? '#e9daff' : '#a766f2'} />} sx={{ color: 'text.primary' }} label="혼잡도 뷰" to="/" component={Link} />
        <Tab icon={<Car fill={value === 1 ? '#e9daff' : '#a766f2'} />} sx={{ color: 'text.primary' }} label="주차장" to="/parking" component={Link} />
        <Tab icon={<Luggage fill={value === 2 ? '#e9daff' : '#a766f2'} />} sx={{ color: 'text.primary' }} label="공항이용 팁" to="/tip" component={Link} />
      </Tabs>
    </ThemeProvider>

  );
}
