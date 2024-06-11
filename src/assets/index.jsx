import logo from './logo.png';
import cartIcon from './cartIcon.png';

const MainLogo = () => {
  return <img className="mainLogo" src={logo} alt="logo" />;
};

const CartIcon = () => {
  return <img className="cartIcon" src={cartIcon} alt="cart icon" />;
};

export { CartIcon, MainLogo };
