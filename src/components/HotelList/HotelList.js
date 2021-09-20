import Hotel from './elements/Hotel';
import NoHotel from './elements/NoHotel';
import './HotelList.css';

const HotelList = ({ hotels }) => {
  return (
    <section className="resultados">
      <div className="container">
        {!hotels.length ? (
          <NoHotel />
        ) : (
          hotels.map((hotel, index) => (
            <Hotel key={`hotel-${index}`} hotel={hotel} />
          ))
        )}
      </div>
    </section>
  );
};

export default HotelList;
