import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeesList from "./components/employees-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component={EmployeesList} />
      </div>
    </Router>
  );
}

export default App;
