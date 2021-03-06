import { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import { getPais, getTamaño } from './components/Filters/data';
import Header from './components/Header';
import HotelList from './components/HotelList';
import Legend from './components/Legend';
import hotels from './hotels';
import { toDate, validarFechas } from './utilities';

const initialValues = {
  checkinDate: '',
  checkoutDate: '',
  country: 'all',
  price: 'all',
  size: 'all',
  error: '',
};

function App() {
  const [filters, setFilters] = useState(initialValues);

  const updateFilters = (name, value) => {
    setFilters(
      name
        ? {
            ...filters,
            [name]: value,
            error:
              (name === 'checkoutDate' &&
                !validarFechas(filters.checkinDate, value)) ||
              (name === 'checkinDate' &&
                !validarFechas(value, filters.checkoutDate))
                ? '🛑 La Fecha de Salida ingresada es menor a la Fecha de Ingreso'
                : '',
          }
        : initialValues
    );
  };

  const filteredHotels =
    (filters.checkinDate && !filters.checkoutDate) ||
    (filters.checkoutDate && !filters.checkinDate) ||
    filters.error
      ? null
      : hotels
          .filter((hotel) => {
            return filters.checkinDate === '' && filters.checkoutDate === ''
              ? true
              : hotel.availabilityFrom <=
                  toDate(filters.checkinDate).getTime() + 86400000 &&
                  hotel.availabilityFrom <
                    toDate(filters.checkoutDate).getTime() &&
                  hotel.availabilityTo >=
                    toDate(filters.checkoutDate).getTime() &&
                  hotel.availabilityTo > toDate(filters.checkinDate).getTime();
          })
          .filter((hotel) =>
            filters.country === 'all'
              ? true
              : getPais(filters.country).label === hotel.country
          )
          .filter((hotel) =>
            filters.price === 'all'
              ? true
              : parseInt(filters.price) === parseInt(hotel.price)
          )
          .filter((hotel) =>
            filters.size === 'all'
              ? true
              : getTamaño(filters.size).from <= hotel.rooms &&
                hotel.rooms <= getTamaño(filters.size).to
          );

  return (
    <div className="App">
      <Header />
      <Filters filters={filters} updateFilters={updateFilters} />
      <Legend
        filters={filters}
        hotelsLength={filteredHotels && filteredHotels.length}
      />
      {filteredHotels && <HotelList hotels={filteredHotels} />}
    </div>
  );
}

export default App;
