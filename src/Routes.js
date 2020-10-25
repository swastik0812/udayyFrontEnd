import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import { Form, Main } from "./app/containers";

export default function Routes() {
  return (
         <HashRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/Main" component={Main} />

      </Switch>
    </HashRouter>
  );
}
