import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../pages/landing";
import OrphanageMap from "../pages/orphanage-map";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/mapa-orfanato" component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
