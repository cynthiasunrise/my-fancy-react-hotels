import Hotel from './elements/Hotel';
import NoHotel from './elements/NoHotel';
import { getPais, getTamaño } from './../Filters/data';
import { formatFromInputToDate, getTomorrow } from './../../utilities';
import './HotelList.css';

const HotelList = ({ hotels, filters }) => {
  const { fechaIngreso, fechaSalida, pais, precio, tamaño } = filters;

  const hotelesFiltrados = hotels
    .filter((hotel) => {
      if (fechaIngreso === '') {
        return true;
      } else {
        return (
          formatFromInputToDate(fechaIngreso).getTime() <=
          hotel.availabilityFrom
        );
      }
    })
    .filter((hotel) => {
      if (fechaSalida === '') {
        return true;
      } else {
        return (
          hotel.availabilityTo <=
          formatFromInputToDate(getTomorrow(fechaSalida)).getTime()
        );
      }
    })
    .filter((hotel) => {
      if (pais === 'all') {
        return true;
      } else {
        return getPais(pais).label === hotel.country;
      }
    })
    .filter((hotel) => {
      if (precio === 'all') {
        return true;
      } else {
        return parseInt(precio) === parseInt(hotel.price);
      }
    })
    .filter((hotel) => {
      if (tamaño === 'all') {
        return true;
      } else {
        return (
          getTamaño(tamaño).from <= hotel.rooms &&
          hotel.rooms <= getTamaño(tamaño).to
        );
      }
    });

  return (
    <section className="resultados">
      {!hotelesFiltrados.length ? (
        <NoHotel />
      ) : (
        hotelesFiltrados.map((hotel, index) => (
          <Hotel key={`hotel-${index}`} hotel={hotel} />
        ))
      )}
    </section>
  );
};

export default HotelList;
