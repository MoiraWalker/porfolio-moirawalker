import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./routing/AppRouter";
import { NavBar, NavBurger } from "./components/navigation";
import { BurgerBarContextProvider } from "./context/burgerBarContextProvider/burgerBarContextProvider";
import { NavApp } from "./components/navigation/navApp/navApp";

function App() {
  return (
    <div className="App">
      <Router>
        <BurgerBarContextProvider>
          <NavApp />
          <AppRouter />
        </BurgerBarContextProvider>
      </Router>
    </div>
  );
}

export default App;
