import MainHeader from "./Components/MainHeader/MainHeader";
import "./App.css"
import Product from "./Components/Items/Product";
import YourThali from "./Components/Your Thali/YourThali";
import { Route, BrowserRouter } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import HomePage from "./Components/MainHeader/HomePage";
import SuccesOrder from "./Components/Succes order/succesOrder";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/thali">
          <YourThali />
        </Route>
        <Route path="/bookedItem">
          <Checkout />
        </Route>
        <Route path="/succes">
          <SuccesOrder />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
