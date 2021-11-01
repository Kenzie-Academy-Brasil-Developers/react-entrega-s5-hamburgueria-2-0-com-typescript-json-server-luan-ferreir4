import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { RegisterPage } from "../Pages/Register";
import { SignInPage } from "../Pages/SignIn";
import { GlobalStyles } from "../Styles/GlobalStyles";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyles />
        <SignInPage />
      </Route>
      
      <Route path="/register">
        <GlobalStyles />
        <RegisterPage />
      </Route>

      <Route path="/home">
        <GlobalStyles />
        <HomePage />
      </Route>
    </Switch>
  );
};
