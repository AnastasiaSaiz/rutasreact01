import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


const Cabecera = () => {
  <header>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nombres">Nombres</Link></li>
    </ul>
  </header>
}
const Nombres = () => {
  const [nombres, setNombres] = useState(["Ana", "Carmen", "Luci"]);
  const mostrarNombres = nombres.map(nombre => {
    return <li>{nombre}</li>
  })
  return (
    <ul>{mostrarNombres}</ul>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Route exact path="/">
        <h1>Rutas en react</h1>
      </Route>
      <Route exact path="/nombres">
        <Nombres />
      </Route>
    </BrowserRouter>
  );
}

export default App;
