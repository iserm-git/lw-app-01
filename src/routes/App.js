import Layout from "../containers/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../containers/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
