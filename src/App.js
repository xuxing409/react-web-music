import React, { memo } from "react";
import { Provider } from "react-redux";
import GetRoutes from "./router";
import store from "./store";

import { HashRouter as Router } from "react-router-dom";

import XXAppHeader from "@/components/app-header";
import XXAppFooter from "@/components/app-footer";
import XXAppPlayerBar from "./pages/player/app-player-bar";


const App = memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <XXAppHeader />
        <GetRoutes />
        <XXAppFooter />
        <XXAppPlayerBar />
      </Router>
    </Provider>
  );
});

export default App;
