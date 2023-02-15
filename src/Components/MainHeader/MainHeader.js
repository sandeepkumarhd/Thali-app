import style from "./MainHeader.module.css";
import Checkout from "../Checkout/Checkout";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to={"/"}>
          <h1>HDCB Restaurant</h1>
        </Link>

        <ul>
          <NavLink to={"/product"}>
            <li>Products</li>
          </NavLink>
          <NavLink to={"/thali"}>
            <li>Your Thali</li>
          </NavLink>
          <NavLink to={"/bookedItem"}>
            <li>Booked Thali</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
