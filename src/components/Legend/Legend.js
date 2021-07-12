import LegendItem from './elements/LegendItem';
import { getPais, getPrecio, getTamaño } from './../Filters/data';
import { formatFromInputToDate, getLongFormatDate } from './../../utilities';
import { getSelectAllLabel } from './../Filters/data';
import './Legend.css';

const Legend = ({ filters }) => {
  let { fechaIngreso, fechaSalida, pais, precio, tamaño } = filters;

  fechaIngreso =
    fechaIngreso === ''
      ? fechaIngreso
      : getLongFormatDate(formatFromInputToDate(fechaIngreso));
  fechaSalida =
    fechaSalida === ''
      ? fechaSalida
      : getLongFormatDate(formatFromInputToDate(fechaSalida));
  pais =
    pais === 'all'
      ? `En ${getSelectAllLabel('Pais')}`
      : `En ${getPais(pais).label}`;
  precio =
    precio === 'all'
      ? `De ${getSelectAllLabel('Precio')}`
      : `De precio ${getPrecio(precio).label}`;
  tamaño =
    tamaño === 'all'
      ? `De ${getSelectAllLabel('Tamaño')}`
      : `De tamaño ${getTamaño(tamaño).label}`;

  const getDateLabel = () => {
    return fechaIngreso === '' ? (
      ':'
    ) : (
      <>
        {' '}
        del <span className="hotel__fecha">{fechaIngreso}</span> al{' '}
        <span className="hotel__fecha">{fechaSalida}</span>:
      </>
    );
  };

  return (
    <section className="leyendaFiltros">
      <div className="leyendaFiltros__container">
        <p className="leyenda__rotulo">
          Mostrando Hoteles disponibles{getDateLabel()}
        </p>

        <div className="leyenda__items">
          <LegendItem selection={pais} />
          <LegendItem selection={precio} />
          <LegendItem selection={tamaño} />
        </div>
      </div>
    </section>
  );
};

export default Legend;
