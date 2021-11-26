import React from 'react';
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kuala Lumpur, MY" />
      <footer>
        <a href="https://github.com/jxaqi/react-weather-app" className="footer">Open source code</a>&nbsp;react weather app by JiaQi
      </footer>
    </div>
  );
}

export default App;
