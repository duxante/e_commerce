import Navigation from './features/navigation/navigation';
import FreshInovative from './features/freshInovative/freshInovative';
import BeautifulPresentations from './features/beautifulPresentations/beautifulPresentations';
import ShowcaseApps from './features/showcaseApps/showcaseApss';
import OurPackages from './features/ourPackages/ourPackages';
import ProductInformation from './features/productInformation/productInformation';
import FeatureBestSellers from './features/featureBestSellers/featureBestSellers';
import './App.css';

function App() {
  return (
    <div className="appHolder">
      <Navigation />
      <FreshInovative />
      <BeautifulPresentations />
      <ShowcaseApps />
      <OurPackages />
      <ProductInformation />
      <FeatureBestSellers />
    </div>
  );
}

export default App;
