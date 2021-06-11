import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Invest from "./views/Investment/Investment"
import Dashboard from "./views/Dashboard/Dashboard"
import Validation from "./views/Validation/validation"

function App() {
  return (
    <div >
      <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/invest" component={Invest} />
        <Route path="/validation" component={Validation} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
