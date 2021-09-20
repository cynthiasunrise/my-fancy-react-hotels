import { getLongFormatDate, toDate } from './../../utilities';
import {
  getPais,
  getPrecio,
  getSelectAllLabel,
  getTamaño,
} from './../Filters/data';
import LegendItem from './elements/LegendItem';
import './Legend.css';

const Legend = ({ filters, hotelsLength }) => {
  let { checkinDate, checkoutDate, country, price, size, error } = filters;

  checkinDate = checkinDate ? getLongFormatDate(toDate(checkinDate)) : '';
  checkoutDate = checkoutDate ? getLongFormatDate(toDate(checkoutDate)) : '';
  country =
    country === 'all'
      ? `En ${getSelectAllLabel('Pais')}`
      : `En ${getPais(country).label}`;
  price =
    price === 'all'
      ? `De ${getSelectAllLabel('Precio')}`
      : `De precio ${getPrecio(price).label}`;
  size =
    size === 'all'
      ? `De ${getSelectAllLabel('Tamaño')}`
      : `De tamaño ${getTamaño(size).label}`;

  const getDateLabel = () => {
    return checkinDate === '' ? (
      ':'
    ) : (
      <>
        {' '}
        del <span className="hotel__fecha">{checkinDate}</span> al{' '}
        <span className="hotel__fecha">{checkoutDate}</span>:
      </>
    );
  };

  return (
    <section className="leyendaFiltros">
      <div className="container">
        <p className="leyenda__rotulo">
          {hotelsLength != null &&
            `Mostrando ${hotelsLength} ${
              hotelsLength === 1 ? 'Hotel disponible' : 'Hoteles disponibles'
            }`}{' '}
          {hotelsLength !== null && getDateLabel()}
        </p>

        <div className="leyenda__items">
          <LegendItem selection={country} />
          <LegendItem selection={price} />
          <LegendItem selection={size} />
        </div>
      </div>
    </section>
  );
};

export default Legend;
