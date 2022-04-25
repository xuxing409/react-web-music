import React, { memo } from "react";

import GetRoutes from "./router";

import XXAppHeader from "@/components/app-header";
import XXAppFooter from "@/components/app-footer";
import { HashRouter as Router } from "react-router-dom";

const App = memo(() => {
  return (
    <Router>
      <XXAppHeader />
      <GetRoutes />
      <XXAppFooter />
    </Router>
  );
});

export default App;
