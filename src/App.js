import React, { memo } from "react";
import { Provider } from "react-redux";
import GetRoutes from "./router";
import store from "./store";

import XXAppHeader from "@/components/app-header";
import XXAppFooter from "@/components/app-footer";
import { HashRouter as Router } from "react-router-dom";

const App = memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <XXAppHeader />
        <GetRoutes />
        <XXAppFooter />
      </Router>
    </Provider>
  );
});

export default App;
