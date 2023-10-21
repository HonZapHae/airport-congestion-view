import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="홈" to="/" component={Link} />
      <Tab label="주차장" to="/parking" component={Link} />
      <Tab label="공항이용팁" to="/tip" component={Link} />
    </Tabs>
  );
}
