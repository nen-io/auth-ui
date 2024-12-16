import { Route, Router } from "@solidjs/router";
import SignIn from "./pages/signIn";
import Register from "./pages/Register";
import rootLayout from "./pages/rootLayout";

export default () => {
  return (
    <Router root={rootLayout}>
      <Route path={"/"} component={() => <h1>home</h1>} />
      <Route path={"/SignIn"} component={SignIn} />
      <Route path={"/Register"} component={Register} />
    </Router>
  );
};
