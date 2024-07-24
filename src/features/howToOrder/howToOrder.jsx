import { Step1, Step2, Step3 } from '../../assets';
import './howToOrder.style.css';

const HowToOrder = () => {
  return( 
  <div className="howToOrderHolder">
      <div className='howToOrderMain'>
        <div className='howToOrderStep'>
          <h1>STEP 1</h1>
          <p>Pick what you like from the Shop</p>
          <Step1 />
        </div>
        <div className='howToOrderStep'>
          <h1>STEP 2</h1>
          <p>Add it into the cart</p>
          <Step2 />
        </div>
        <div className='howToOrderStep'>
          <h1>STEP 3</h1>
          <p>Proceed to the Checkout</p>
          <Step3 />
        </div>
      </div>
  </div>
  );
};

export default HowToOrder;
