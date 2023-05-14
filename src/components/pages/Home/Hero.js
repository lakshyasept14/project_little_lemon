import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Integer mollis ex ut lacus pharetra, nec faucibus lacus facilisis.
            Sed in lacinia justo. Quisque sed feugiat sem, in semper tortor.
             Morbi nec orci felis. Suspendisse non ipsum risus.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className='hero-image'
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
