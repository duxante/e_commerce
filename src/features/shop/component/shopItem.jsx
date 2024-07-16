import MyButton from '../../../common/button/myButton';
import HalfRating from '../../../common/rating/rating';
import '../style/shopItem.style.css';

const ShopItem = ({ img, title, price, description }) => {
  return (
    <div className="oneshopItem">
      <img src={img} />
      <div className="titleAndPrice">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      <div className="rating">
        <HalfRating />
        <p>{description}</p>
      </div>
      <MyButton customClass="shopItemButton" buttonText="Add to Cart" />
    </div>
  );
};
export default ShopItem;
