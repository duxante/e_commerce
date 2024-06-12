import {
  Audison,
  Headphones,
  Kicker,
  Klipsch,
  Marshall,
  Polk,
  Yamaha,
} from '../../assets';
import MyButton from '../../common/button/myButton';
import './freshInovative.style.css';

const FreshInovative = () => {
  return (
    <div className="freshInovativeHolder">
      <div className="freshInovativeMain">
        <div className="upperFreshInovative">
          <div className="leftSideFreshInovative">
            <h1>Fresh Beautiful. Inovative.</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam neque saepe deserunt atque in necessitatibus officiis
              molestias possimus maxime inventore, expedita.
            </p>
            <MyButton buttonText="Order Now" />
          </div>
          <div className="rightSideFreshInovative">
            <Headphones />
          </div>
        </div>
        <div className="bottomFreshInovative">
          <Kicker />
          <Yamaha />
          <Audison />
          <Polk />
          <Klipsch />
          <Marshall />
        </div>
      </div>
    </div>
  );
};

export default FreshInovative;
