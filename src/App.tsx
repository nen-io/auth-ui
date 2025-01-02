import { Route, Router } from "@solidjs/router";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import rootLayout from "./layout/rootLayout";
import Home from "./pages/Home";

export default () => {
  return (
    <Router root={rootLayout}>
      <Route path={"/"} component={Home} />
      <Route path={"/SignIn"} component={SignIn} />
      <Route path={"/Register"} component={Register} />
    </Router>
  );
};
