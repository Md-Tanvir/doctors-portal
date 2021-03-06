import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <div className='App'>
     <Router>
     <Switch>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>

    </div>
  );
}

export default App;
