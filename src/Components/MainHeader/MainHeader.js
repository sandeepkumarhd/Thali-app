import style from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MainHeader = () => {
  const history = useHistory();
  const menuHandler = () => {
    history.push("/thali");
  };
  return (
    <div>
      <header className={style.header}>
        <nav>
          <Link to={"/"}>
            <h1>HDCB</h1>
          </Link>
          <ul className={""}>
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
          <i onClick={menuHandler} class="fa-solid fa-cart-shopping"></i>
        </nav>
      </header>
    </div>
  );
};
export default MainHeader;
