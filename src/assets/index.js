import logo from './logo.png';
import cartIcon from './cartIcon.png';
import headphones from './headphones.png';
import audison from './audison.png';
import kicker from './kicker.png';
import polk from './polk.png';
import marshall from './marshall.png';
import yamaha from './yamaha.png';
import klipsch from './klipsch.png';
import easyToUse from './easyToUse.png';
import freeUpdates from './freeUpdates.png';
import trendyDesign from './trendyDesign.png';
import atheadphones from './atheadphones.png';
import sonyHeadphones from './sonyHeadphones.png';
import motoHeadphones from './motoHeadphones.png';
import jblHeadphones from './jblHeadphones.png';
import check from './check.png';

const SonyHeadphones = () => {
  return (
    <img
      className="packageHeadphones"
      src={sonyHeadphones}
      alt="sony headphones"
    />
  );
};

const MotoHeadphones = () => {
  return (
    <img
      className="packageHeadphones"
      src={motoHeadphones}
      alt="motorola headphones"
    />
  );
};

const JblHeadphones = () => {
  return (
    <img
      className="packageHeadphones"
      src={jblHeadphones}
      alt="jbl headphones"
    />
  );
};

const ATHeadphones = () => {
  return <img className="atheadphones" src={atheadphones} alt="headphones" />;
};

const TrendyDesign = () => {
  return <img className="trendyDesign" src={trendyDesign} alt="fire icon" />;
};

const FreeUpdates = () => {
  return (
    <img className="freeUpdates" src={freeUpdates} alt="free updates icon" />
  );
};

const EasyToUse = () => {
  return <img className="easyToUse" src={easyToUse} alt="easy to use icon" />;
};

const MainLogo = () => {
  return <img className="mainLogo" src={logo} alt="logo" />;
};

const CartIcon = () => {
  return <img className="cartIcon" src={cartIcon} alt="cart icon" />;
};

const Headphones = () => {
  return <img className="headphones" src={headphones} alt="headphones" />;
};

const Audison = () => {
  return <img className="musicLogo" src={audison} alt="audison logo" />;
};

const Kicker = () => {
  return <img className="musicLogo" src={kicker} alt="kicker logo" />;
};

const Klipsch = () => {
  return <img className="musicLogo" src={klipsch} alt="klipsch logo" />;
};

const Polk = () => {
  return <img className="musicLogo" src={polk} alt="polk logo" />;
};

const Marshall = () => {
  return <img className="musicLogo" src={marshall} alt="marshall logo" />;
};

const Yamaha = () => {
  return <img className="musicLogo" src={yamaha} alt="yamaha logo" />;
};

const Check = () => {
  return <img className="check" src={check} alt="check icon" />;
};

export {
  CartIcon,
  MainLogo,
  Headphones,
  Marshall,
  Polk,
  Yamaha,
  Klipsch,
  Kicker,
  Audison,
  TrendyDesign,
  FreeUpdates,
  EasyToUse,
  ATHeadphones,
  MotoHeadphones,
  SonyHeadphones,
  JblHeadphones,
  Check,
};
