import Navigation from './features/navigation/navigation';
import FreshInovative from './features/freshInovative/freshInovative';
import BeautifulPresentations from './features/beautifulPresentations/beautifulPresentations';
import ShowcaseApps from './features/showcaseApps/showcaseApss';
import OurPackages from './features/ourPackages/ourPackages';
import ProductInformation from './features/productInformation/productInformation';
import FeatureBestSellers from './features/featureBestSellers/featureBestSellers';
import './App.css';
import WhatClientsSay from './features/whatClientsSay/whatClientsSay';
import EndingFresh from './features/endingFresh/endingFresh';
import AboutUs from './features/aboutUs/aboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePages = () => {
  return (
    <>
      <FreshInovative />
      <BeautifulPresentations />
      <ShowcaseApps />
      <OurPackages />
      <ProductInformation />
      <FeatureBestSellers />
      <WhatClientsSay />
      <EndingFresh />
    </>
  );
};

function App() {
  return (
    <div className="appHolder">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
