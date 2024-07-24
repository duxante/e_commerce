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
import backToTheFuture from './backToTheFuture.png';
import drStrange from './drStrange.png';
import redDagger from './redDagger.png';
import groot from './groot.png';
import razerHeadhhones from './razerHeadhhones.png';
import catHeadphones from './catHeadphones.png';
import bowers from './bowers.png';
import ourStory from './ourStory.png';
import phoneIcon from './phoneIcon.png';
import locationIcon from './locationIcon.png';
import focalProListen from './focalProListen.png';
import beatsStudioPro from './beatsStudioPro.png';
import aKGK371Twist from './aKGK371Twist.png';
import aTHM70x from './aTHM70x.png';
import trashIcon from './trashIcon.png';
import lockIcon from './lockIcon.png';
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";


const Step3 = () => {
  return(
    <img className='step3' src={step3} alt='cart image' />
  );
};

const Step2 = () => {
  return(
    <img className='step2' src={step2} alt='headphones into cart' />
  );
};

const Step1 = () => {
  return(
    <img className='step1' src={step1} alt='preview image of headphones from shop' />
  );
};

const LockIcon = () => {
  return <img className="lockIcon" src={lockIcon} alt="lock icon" />;
};

const TrashIcon = () => {
  return <img className="trashIcon" src={trashIcon} alt="trash icon" />;
};

const ATHM70x = () => {
  return (
    <img className="aTHM70x" src={aTHM70x} alt="audio technica headphones" />
  );
};

const AKGK371Twist = () => {
  return (
    <img className="aKGK371Twist" src={aKGK371Twist} alt="AKG headphones" />
  );
};

const BeatsStudioPro = () => {
  return (
    <img
      className="beatsStudioPro"
      src={beatsStudioPro}
      alt="beats studio pro headphones"
    />
  );
};

const FocalProListen = () => {
  return <img className="focal" src={focalProListen} alt="focal headphones" />;
};

const PhoneIcon = () => {
  return <img className="phoneIcon" src={phoneIcon} alt="phone Icon" />;
};

const LocationIcon = () => {
  return (
    <img className="locationIcon" src={locationIcon} alt="location icon" />
  );
};

const OurStory = () => {
  return <img className="ourStory" src={ourStory} alt="concert" />;
};

const Bowers = () => {
  return (
    <img className="bowers" src={bowers} alt="bowers speakers and bookshelf" />
  );
};

const CatHeadphones = () => {
  return (
    <img
      className="catHeadphones"
      src={catHeadphones}
      alt="cat and headphones"
    />
  );
};

const Groot = () => {
  return <img className="groot" src={groot} alt="groot figurine" />;
};

const RedDagger = () => {
  return (
    <img className="redDagger" src={redDagger} alt="red dagger figurine" />
  );
};

const BackToTheFuture = () => {
  return (
    <img
      className="backToTheFuture"
      src={backToTheFuture}
      alt="doc brown figurine"
    />
  );
};

const DrStrange = () => {
  return (
    <img className="drStrange" src={drStrange} alt="Dr Strange figurine" />
  );
};

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

const CartIcon = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      className="cartIcon"
      src={cartIcon}
      alt="cart icon"
    />
  );
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

const RazerHeadhhones = () => {
  return (
    <img
      className="razerHeadhhones"
      src={razerHeadhhones}
      alt="green headphones"
    />
  );
};

export {
  Step3,
  Step2,
  Step1,
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
  DrStrange,
  BackToTheFuture,
  RedDagger,
  Groot,
  RazerHeadhhones,
  CatHeadphones,
  Bowers,
  OurStory,
  LocationIcon,
  PhoneIcon,
  FocalProListen,
  BeatsStudioPro,
  AKGK371Twist,
  ATHM70x,
  TrashIcon,
  LockIcon,
};
