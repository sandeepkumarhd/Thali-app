import style from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className={style.homepage}>
        <div>
          <Link to={"/product"}>
            <button>Order Now</button>
          </Link>
        </div>
        <div className={style.logo}>
          <span>HDCB</span>
          <h1>Find the best restaurants, cafés and bars in India</h1>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
