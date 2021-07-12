import { useState } from 'react';
// components
import Header from './components/Header';
import Filters from './components/Filters';
import Legend from './components/Legend';
import HotelList from './components/HotelList';
// data
import hotels from './hotels';
// utilities
import { getTomorrow, validarFechas } from './utilities';
// styles
import './App.css';

function App() {
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [pais, setPais] = useState('all');
  const [precio, setPrecio] = useState('all');
  const [tamaño, setTamaño] = useState('all');
  const [error, setError] = useState('');

  const handleFechaIngreso = (fechaIngreso) => {
    setFechaIngreso(fechaIngreso);
    const tomorrow = getTomorrow(fechaIngreso);
    setFechaSalida(tomorrow);
  };

  const handleFechaSalida = (fechaSalida) => {
    setFechaSalida(fechaSalida);
    if (!validarFechas(fechaIngreso, fechaSalida)) {
      setError(
        '🛑 La Fecha de Salida ingresada es menor a la Fecha de Ingreso'
      );
      return;
    }
    setError('');
  };

  const handlePais = (pais) => {
    setPais(pais);
  };

  const handlePrecio = (precio) => {
    setPrecio(precio);
  };

  const handleTamaño = (tamaño) => {
    setTamaño(tamaño);
  };

  const handleClean = () => {
    setFechaIngreso('');
    setFechaSalida('');
    setPais('all');
    setPrecio('all');
    setTamaño('all');
  };

  const filtersAndHandlers = {
    fechaIngreso,
    handleFechaIngreso,
    fechaSalida,
    handleFechaSalida,
    pais,
    handlePais,
    precio,
    handlePrecio,
    tamaño,
    handleTamaño,
    handleClean,
    error,
  };

  const filters = {
    fechaIngreso,
    fechaSalida,
    pais,
    precio,
    tamaño,
  };

  return (
    <div className="App">
      <Header />
      <Filters filtersAndHandlers={filtersAndHandlers} />
      <Legend filters={filters} />
      <HotelList hotels={hotels} filters={filters} />
    </div>
  );
}

export default App;
