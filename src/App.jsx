import Navigation from './features/navigation/navigation';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FreshInovative from './features/freshInovative/freshInovative';
import BeautifulPresentations from './features/beautifulPresentations/beautifulPresentations';

function App() {
  return (
    <div className="appHolder">
      <Navigation />
      <FreshInovative />
      <BeautifulPresentations />
    </div>
  );
}

export default App;
