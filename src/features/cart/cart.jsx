import { useState } from 'react';
import './cart.style.css';
import { TextField } from '@mui/material';
import MyButton from '../../common/button/myButton';
import { cartData } from '../../data/cartData';
import CartItem from './component/cartItem';

const Cart = () => {
  const [increase, setIncrease] = useState(null);
  return (
    <div className="cartHolder">
      <div className="cartMain">
        <h1>Cart</h1>
        <hr className="cartHr" />
        <div className="cartItems">
          {cartData.map((oneItem) => {
            return (
              <CartItem
                key={oneItem.id}
                img={oneItem.img}
                name={oneItem.name}
                description={oneItem.description}
                span1={oneItem.span1}
                span2={oneItem.span2}
                span3={oneItem.span3}
                price={oneItem.price}
                imgBin={oneItem.imgBin}
              />
            );
          })}
        </div>
        <hr className="cartHr" />
        <div className="cartItemsPromocode">
          <TextField
            name="promocode"
            label="Promocode"
            placeholder="Promocode"
            fullWidth
          />
          <MyButton customClass="buttonApply" buttonText="Apply" />
        </div>
        <p>20% off discount</p>
        <hr />
        <div className="cartItemsSubtotal">
          <div className="subtotalLine">
            <h2>Subtotal</h2>
            <p>$5646,00</p>
          </div>
          <div className="subtotalLine">
            <h3>Discount</h3>
            <p>(-20%) -$1129,00</p>
          </div>
          <div className="subtotalLine">
            <h3>Tax</h3>
            <p>+ $225,84</p>
          </div>
          <div className="subtotalLine">
            <h2>Total</h2>
            <p>$4742,64</p>
          </div>
          <hr className="cartHr" />
        </div>
        <div className="cartItemButtons">
          <MyButton
            customClass="continueShopping"
            buttonText="Continue shopping"
          />
          <MyButton buttonText="Proceed to checkout" />
        </div>
      </div>
    </div>
  );
};
export default Cart;
