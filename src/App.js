import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routing/AppRouter';
import { Navigation } from './components/navigation/Navigation'
import { P5 } from './components/P5/P5';

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


