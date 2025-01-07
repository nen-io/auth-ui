import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import rootLayout from "./layout/rootLayout";
import Home from "./pages/Home";
import VerifyEmail from "./pages/VerifyEmail";
import CheckEmail from "./pages/CheckEmail";
import AuthRoute from "./layout/AuthRoute";
import Settings from "./pages/Settings";
import { Route, Router } from "@solidjs/router";

export default () => {
  return (
    <Router root={rootLayout}>
      <Route
        path={"/"}
        component={() => (
          <AuthRoute>
            <Home />
          </AuthRoute>
        )}
      />
      <Route
        path={"/settings"}
        component={() => (
          <AuthRoute>
            <Settings />
          </AuthRoute>
        )}
      />
      <Route path={"/sign-in"} component={SignIn} />
      <Route path={"/register"} component={Register} />
      <Route path={"/verify-email"} component={CheckEmail} />
      <Route path={"/verify-email/:token/:id"} component={VerifyEmail} />
    </Router>
  );
};
