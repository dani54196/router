import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navegacion from './components/Navegacion';
import Inicio from './components/Inicio';
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";


function App() {
  return (
    <Router>
      <Navegacion/>
      <Route path="/" exact component={Inicio}/>
      <Route path="/acercade" component={AcercaDe}/>
      <Route path="/contacto" component={Contacto}/>
    </Router>
  );
}

export default App;
