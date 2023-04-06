import style from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const MainHeader = () => {
  const [isClicked, setIsClked] = useState(false);
  const menuHandler = () => {
    setIsClked((pre) => !pre);
    console.log("jhsdcjfhjsd")
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
          
          <p><NavLink to={"/thali"}>
              <li>Your Thali</li>
            </NavLink></p>
          <i
            onClick={menuHandler}
            className={`fa-solid fa-bars`}
          ></i>
        </nav>
      </header>
      <section className={!isClicked ? "section" : "sectionMenu"}>
        
      </section>
    </div>
  );
};
export default MainHeader;
