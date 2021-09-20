import Button from '../../../Button';
import { getLongFormatDate } from '../../../../utilities';
import { getPrecio } from './../../../Filters/data';

const Hotel = ({ hotel }) => {
  const fechaInicio = getLongFormatDate(hotel.availabilityFrom);
  const fechaFin = getLongFormatDate(hotel.availabilityTo);

  const obtenerPrecio = () => {
    return (
      <p className="hotel__precio">
        {[...Array(hotel.price)].map((e, i) => (
          <i
            key={`${hotel.name}_${i}`}
            className="hotel__icon fas fa-dollar-sign"
          ></i>
        ))}
        {` ${getPrecio(`${hotel.price}`).label}`}
      </p>
    );
  };

  return (
    <div className="hotel">
      <div className="hotel__img-container">
        <img className="hotel__img" src={hotel.photo} alt="Imagen del Hotel" />
      </div>
      <div className="hotel__contenido">
        <h3 className="texto-titulo hotel__nombre">{hotel.name}</h3>
        <p className="hotel__ubicacion">
          <i className="hotel__icon fas fa-map-marker-alt"></i>
          <a
            className="hotel__ubicacion-link"
            href="https://google.com"
          >{`${hotel.city}. ${hotel.country}`}</a>
        </p>
        <hr />
        <p className="hotel__disponibilidad">
          Disponibilidad desde el{' '}
          <span className="hotel__fecha">{fechaInicio}</span> al{' '}
          <span className="hotel__fecha">{fechaFin}</span>
        </p>
        <hr />
        <p>{hotel.description}</p>
        <hr />
        <p className="hotel__tamaño">
          <i className="hotel__icon fas fa-bed"></i>
          {`${hotel.rooms} habitaciones`}
        </p>
        {obtenerPrecio()}
        <div className="hotel__btn-container">
          <Button label="Reservar" cssClass="hotel__btn-center"></Button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
