import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import Row1 from './components/RowComponents/Row1'
import Row2 from './components/RowComponents/Row2'
import Row3 from './components/RowComponents/Row3'
import Row4 from './components/RowComponents/Row4'
import Row5 from './components/RowComponents/Row5'




const App = () => {
  return (
    <div>
      <CalculatorDisplay text='0'/>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />      
    </div>
  );
};

export default App;
