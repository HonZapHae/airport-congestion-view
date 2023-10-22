import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Parking } from '../pages/Parking';
import { Tip } from '../pages/Tip';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="parking" element={<Parking />} />
          <Route path="tip" element={<Tip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
