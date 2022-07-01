import { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  const now = new Date(2022, 6, 10);
  console.log(now)
  return (
    <Calendar date={now} />
  )
}

export default App;
