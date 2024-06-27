import { testimonialData } from '../../data/testimonialData';
import MainExample from './component/testimonialMain';
import './whatClientsSay.style.css';

const WhatClientsSay = () => {
  return (
    <div className="whatClientsSayHolder">
      <div className="whatClientsSayMain">
        <h1>What Our Clients Say</h1>
        <div className="whatClientsSayBottom">
          {testimonialData.map((oneTestimonial) => {
            return (
              <MainExample
                key={oneTestimonial.id}
                /* id={oneTestimonial.id} */
                img={oneTestimonial.img}
                description={oneTestimonial.description}
                title={oneTestimonial.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatClientsSay;
