import Navigation from './features/navigation/navigation';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FreshInovative from './features/freshInovative/freshInovative';

function App() {
  return (
    <div className="appHolder">
      <Navigation />
      <FreshInovative />
    </div>
  );
}

export default App;
