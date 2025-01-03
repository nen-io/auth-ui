import { Route, Router } from "@solidjs/router";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import rootLayout from "./layout/rootLayout";
import Home from "./pages/Home";
import VerifyEmail from "./pages/VerifyEmail";

export default () => {
  return (
    <Router root={rootLayout}>
      <Route path={"/"} component={Home} />
      <Route path={"/sign-in"} component={SignIn} />
      <Route path={"/register"} component={Register} />
      <Route path={"/verify-email"} component={VerifyEmail} />
    </Router>
  );
};
