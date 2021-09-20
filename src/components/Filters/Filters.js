import InputDate from './elements/InputDate';
import InputSelect from './elements/InputSelect';
import Button from '../Button';
import { paises, precios, tamaños } from './data';
import './Filters.css';

function Filters({ filters, updateFilters }) {
  const { checkinDate, checkoutDate, country, price, size, error } = filters;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="filtros">
      <div className="container">
        <form onSubmit={handleSubmit} className="filtros__form">
          <InputDate
            label="Fecha Ingreso"
            value={checkinDate}
            name="checkinDate"
            onChange={updateFilters}
          />
          <InputDate
            label="Fecha Salida"
            value={checkoutDate}
            name="checkoutDate"
            onChange={updateFilters}
          />
          <InputSelect
            label="Pais"
            options={paises}
            value={country}
            name="country"
            onChange={updateFilters}
          />
          <InputSelect
            label="Precio"
            options={precios}
            value={price}
            name="price"
            onChange={updateFilters}
          />
          <InputSelect
            label="Tamaño"
            options={tamaños}
            value={size}
            name="size"
            onChange={updateFilters}
          />
          <Button
            cssClass="filtros__group"
            label="Limpiar"
            onClick={() => updateFilters(null)}
          />
        </form>
        <span className="filtros__validacion">{error}</span>
      </div>
    </section>
  );
}

export default Filters;
