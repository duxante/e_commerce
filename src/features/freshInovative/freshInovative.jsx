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
            <h1>Fresh. </h1>
            <h1>Beautiful. </h1>
            <h1>Inovative.</h1>
            <hr className="myHr" />
            <p>
              Explore our headphone collection online. Cutting-edge designs,
              superior sound quality, and unbeatable prices await. Discover your
              perfect pair today and elevate your listening experience!
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
