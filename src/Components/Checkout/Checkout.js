import { useSelector } from "react-redux";
import style from "./Checkout.module.css"
const Checkout = (props) => {
  const totalPrice = useSelector((state) => state.bookedThali.totalPrice);
  const numberOfItems = useSelector((state) => state.bookedThali.totalItem);

  return (
    <div>
      <div className={style.checkout}>
        <h2>Total Item That You Already Booked : {numberOfItems}</h2>
        <h2>Total Price That You Have Paid : {totalPrice}</h2>
      </div>
    </div>
  );
};
export default Checkout;
