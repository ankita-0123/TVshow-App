// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import TicketBookingForm from './components/TicketBookingForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
        <Route path="/booking/:id" element={<TicketBookingForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



