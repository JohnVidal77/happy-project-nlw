import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../pages/landing";
import OrphanageMap from "../pages/orphanage-map";
import CreateOrphanage from "../pages/create-orphanages";
import Orphanage from "../pages/orphanage-detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/mapa-orfanato" component={OrphanageMap} />
        <Route exact path="/criar-orfanato" component={CreateOrphanage} />
        <Route exact path="/orfanato/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
