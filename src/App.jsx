import Navigation from './features/navigation/navigation';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FreshInovative from './features/freshInovative/freshInovative';
import BeautifulPresentations from './features/beautifulPresentations/beautifulPresentations';
import ShowcaseApps from './features/showcaseApps/showcaseApss';
import OurPackages from './features/ourPackages/ourPackages';

function App() {
  return (
    <div className="appHolder">
      <Navigation />
      <FreshInovative />
      <BeautifulPresentations />
      <ShowcaseApps />
      <OurPackages />
    </div>
  );
}

export default App;
