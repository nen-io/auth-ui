import SignIn from "./pages/Auth/SignIn";
import Register from "./pages/Auth/Register";
import rootLayout from "./layout/rootLayout";
import Home from "./pages/Home";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import AuthRoute from "./layout/AuthRoute";
import Settings from "./pages/Settings";
import { Route, Router } from "@solidjs/router";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import LandingPage from "./pages/Landing";
import { ForgotPasswordChange } from "./pages/Auth/ForgotPasswordChange";
import PageNotFound from "./pages/PageNotFound";
import CheckEmailResetPassword from "./pages/Auth/CheckEmailResetPassword";
import Profile from "./pages/Profile";
import CheckEmail from "./pages/Auth/CheckEmail";

export default () => {
  return (
    <Router root={rootLayout}>
      <Route path={"/"} component={LandingPage} />
      <Route
        path={"/home"}
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
      <Route
        path={"/profile"}
        component={() => (
          <AuthRoute>
            <Profile />
          </AuthRoute>
        )}
      />
      <Route path={"/sign-in"} component={SignIn} />
      <Route path={"/register"} component={Register} />
      <Route path={"/verify-email"} component={CheckEmail} />
      <Route path={"/verify-email/:token/:id"} component={VerifyEmail} />
      <Route
        path={"/reset-password/:token/:id"}
        component={ForgotPasswordChange}
      />
      <Route path={"/forgot-password"} component={ForgotPassword} />
      <Route
        path={"/forgot-password/check-email"}
        component={CheckEmailResetPassword}
      />
      <Route path={"/404"} component={PageNotFound} />
      <Route path={"*"} component={PageNotFound} />
    </Router>
  );
};
