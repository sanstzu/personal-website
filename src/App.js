import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import './scss/custom.scss'
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/index.js'
import Body from './components/Body/index.js'
function App() {
  React.useEffect(() => {
    document.title = "Sanstzu's Crib"
  },[]);
  return (
    <div id="subroot">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
