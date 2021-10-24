import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthRegister } from "./components/auth";
import { Admin } from "./components/admin";

import "./static/css/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/signup">
            <AuthRegister />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route>
            <p>...and you still . . . haven't found . . . what you're looking for!</p>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
