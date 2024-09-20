import { type ParentComponent } from "solid-js";
import "./index.css";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import Home from "./views/home/Home";

const App: ParentComponent = ({ children }) => {
  return (
    <>
      <h1>Prio App</h1>
      {children}
    </>
  );
};

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
    </Router>
  ),
  document.getElementById("root")!
);
