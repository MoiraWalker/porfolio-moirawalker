import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routing/AppRouter';
import { Navigation } from './components/navigation/Navigation'

function App() {
  return (
    <div className="App">
       <Router>
          <Navigation/>
          <AppRouter />
        </Router>
    </div>
  );
}

export default App;
