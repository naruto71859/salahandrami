import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NAV from "./components/layout/NAV";
import Dashbord from "./components/Dashbord";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Detail from "./components/Detail";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/layout/Footer";
import Shopping from "./components/Shopping";
import Profile from "./components/Profile";
import AdminAddProduct from "./components/AdminAddProduct";
import AdminModifyProduct from "./components/AdminModifyProduct";
import AdminListOfUsers from "./components/AdminListOfUsers";
import AdminListOfOrders from "./components/AdminListOfOrders";
import Allorders from "./test/Allorders";
function App() {
  return (
    <BrowserRouter>
      <NAV />
      <Switch>

      <Route exact path="/allorder" component={Allorders} />



        <Route exact path="/adminproduct" component={AdminAddProduct} />
        <Route exact path="/modifyproduct" component={AdminModifyProduct} />
        <Route exact path="/listofusers" component={AdminListOfUsers} />
        <Route exact path="/listoforders" component={AdminListOfOrders} />

        <Route exact path="/signin" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Shopping" component={Shopping} />
        <Route exact path="/" component={Dashbord} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Checkout" component={CheckOut} />
        <Route exact path="/signup" component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
