import React from 'react';
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kuala Lumpur, MY" />
    </div>
  );
}

export default App;
