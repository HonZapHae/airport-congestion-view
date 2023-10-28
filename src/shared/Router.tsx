import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Parking } from '@/pages/Parking';
import { Tip } from '@/pages/Tip';
import { Checklist } from '@/pages/TipDetail/Checklist';
import { DepartureProcess } from '@/pages/TipDetail/DepartureProcess';
import { Notallowed } from '@/pages/TipDetail/Notallowed';
import { Essential } from '@/pages/TipDetail/Essential';
import { Minbaggage } from '@/pages/TipDetail/Minbaggage';
import { Businfo } from '@/pages/TipDetail/Businfo';
import { AirportPhone } from '@/pages/TipDetail/AirportPhone';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="parking" element={<Parking />} />
          <Route path="tip" element={<Tip />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="departureprocess" element={<DepartureProcess />} />
          <Route path="notallowed" element={<Notallowed />} />
          <Route path="essential" element={<Essential />} />
          <Route path="minbaggage" element={<Minbaggage />} />
          <Route path="businfo" element={<Businfo />} />
          <Route path="airportphone" element={<AirportPhone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
