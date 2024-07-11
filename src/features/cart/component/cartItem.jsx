import '../style/cartItem.style.css';

const CartItem = ({
  key,
  img,
  name,
  description,
  span1,
  span2,
  span3,
  price,
  imgBin,
}) => {
  return (
    <div className="cartItemHolder">
      <div className="cartItem">
        {img}
        <div className="cartItemImg">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="cartItemIncreseDecrease">
        <span className="spanish">{span3}</span>
        <span>{span2}</span>
        <span className="spanish">{span1}</span>
      </div>
      <div className="cartItemPrice">
        <p>{price}</p>
        {imgBin}
      </div>
    </div>
  );
};
export default CartItem;
