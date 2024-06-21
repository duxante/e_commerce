import { RazerHeadhhones } from '../../assets';
import MyButton from '../../common/button/myButton';
import Footer from '../footer/footer';
import './endingFresh.style.css';

const EndingFresh = () => {
  return (
    <div className="endingFreshHolder">
      <div className="endingFreshMain">
        <div className="endingFreshLeftSide">
          <h1>Fresh Beautiful. Inovative.</h1>
          <hr />
          <p>
            Unlock extraordinary sound with our top-rated headphones! Visit our
            web shop now to experience unbeatable quality and service. Don’t
            miss out—shop today and elevate your audio experience!
          </p>
          <MyButton customClass="endingFreshButton" buttonText="Order Now" />
        </div>
        <div className="rightSideFreshInovative">
          <RazerHeadhhones />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EndingFresh;
