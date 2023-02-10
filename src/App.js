import MainHeader from "./Components/MainHeader/MainHeader";
import Product from "./Components/Items/Product";
import YourThali from "./Components/Your Thali/YourThali";
import { Route, BrowserRouter} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />
        <Route path="/" exact>
         <Product/>
        </Route>
        <Route path="/thali">
          <YourThali />
        </Route>
        <Route path="/bookedItem">
          <Checkout />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
