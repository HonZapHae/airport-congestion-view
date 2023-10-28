import { useEffect, useState } from 'react';
import {
  Tabs, Tab, createTheme, ThemeProvider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Airplane from '@/resources/icons/airplane_icon.svg?react';
import Car from '@/resources/icons/car_icon.svg?react';
import Luggage from '@/resources/icons/luggage_icon.svg?react';

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
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    localStorage.setItem('tabs', `${newValue}`);
    setValue(newValue);
  };

  const fetchTabIndex = () => {
    const tabIndex = localStorage.getItem('tabs') || 0;
    setValue(Number(tabIndex));
  };

  useEffect(() => {
    fetchTabIndex();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        textColor="secondary"
        variant="fullWidth"
        sx={{
          '& .MuiTabs-flexContainer': { height: 88 }, bgcolor: 'background.paper', height: 80, width: '500px', zIndex: '999999', bottom: '0', position: 'fixed',
        }}
        TabIndicatorProps={{ sx: { top: 0, backgroundColor: 'secondary.main' } }}
        value={value}
        onChange={handleChange}
      >
        <Tab icon={<Airplane fill={value === 0 ? '#e9daff' : '#a766f2'} />} sx={{ color: 'text.primary', fontSize: '12px', gap: '2px' }} label="혼잡도 뷰" to="/" component={Link} />
        <Tab
          icon={<Car fill={value === 1 ? '#e9daff' : '#a766f2'} />}
          sx={{
            color: 'text.primary', fontSize: '12px', gap: '2px',
          }}
          label="주차장"
          to="/parking"
          component={Link}
        />
        <Tab
          icon={<Luggage fill={value === 2 ? '#e9daff' : '#a766f2'} />}
          sx={{
            color: 'text.primary', fontSize: '12px', gap: '2px',
          }}
          label="공항이용 팁"
          to="/tip"
          component={Link}
        />
      </Tabs>
    </ThemeProvider>

  );
}
