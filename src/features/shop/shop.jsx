import ShopItem from './component/shopItem';
import { items } from '../../data/items';
import './shop.style.css';

const Shop = () => {
  return (
    <div className="shopHolder">
      <div className="shopMain">
        {items.map((item) => {
          return (
            <ShopItem
              key={item.id}
              title={item.name}
              price={item.price}
              img={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
