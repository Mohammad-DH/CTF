import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Terminal from "./pages/Terminal";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/terminal">
          <Terminal />
        </Route>
      </Switch>
      <style jsx>{`
        .App {
          width: 100%;
          min-height: 100vh;
          height: 100%;
          background-color: #363a44;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default App;
