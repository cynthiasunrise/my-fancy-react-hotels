import InputDate from './elements/InputDate';
import InputSelect from './elements/InputSelect';
import Button from '../Button';
import { paises, precios, tamaños } from './data';
import './Filters.css';

function Filters({ filtersAndHandlers }) {
  const {
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
  } = filtersAndHandlers;

  const handleClick = () => {
    handleClean();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="filtros">
      <form onSubmit={handleSubmit} className="filtros__form">
        <InputDate
          label="Fecha Ingreso"
          value={fechaIngreso}
          handler={handleFechaIngreso}
        />
        <InputDate
          label="Fecha Salida"
          value={fechaSalida}
          handler={handleFechaSalida}
        />
        <InputSelect
          label="Pais"
          options={paises}
          value={pais}
          handler={handlePais}
        />
        <InputSelect
          label="Precio"
          options={precios}
          value={precio}
          handler={handlePrecio}
        />
        <InputSelect
          label="Tamaño"
          options={tamaños}
          value={tamaño}
          handler={handleTamaño}
        />
        <Button
          onClick={handleClick}
          label="Limpiar"
          cssClass="filtros__group"
        />
      </form>
      <span className="filtros__validacion">{error}</span>
    </section>
  );
}

export default Filters;
