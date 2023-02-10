import style from "./YourThali.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thaliActions } from "../../Redux Store/yourThaliStore";
import { bookedThaliActions } from "../../Redux Store/BookedThali";
const YourThali = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const thaliItems = useSelector((state) => state.thali.thaliItem);
  const incressItemsHandler = (id) => {
    dispatch(thaliActions.increesItems(id));
  };
  const removeItemHandler = (id) => {
    dispatch(thaliActions.removeItem(id));
  };
  const totalPrice = thaliItems.map((item) => {
    return item.totalPrice;
  });
  const rate = totalPrice.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  const conformOrder = () =>{
    alert("Thali booked Succesfully....!!")
    history.push("/bookedItem")
    dispatch(bookedThaliActions.bookedThaliHandeer({totalPrice:rate,totalItem:thaliItems.length}))
  }
  return (
    <div className={style.thali}>
      {thaliItems.length > 0 && (
        <main>
          {thaliItems.map((product, index) => {
            return (
              <div key={index}>
                <img src={product.image} />
                <p>{product.title}</p>
                <p>Total Quentity :{product.quentity}</p>
                <h2>Total Price: {product.totalPrice}</h2>
                <button onClick={() => removeItemHandler(product.id)}>-</button>
                <button onClick={() => incressItemsHandler(product.id)}>
                  +
                </button>
              </div>
            );
          })}
          <div className={style.button}>
            <h2>Total Price : {rate}</h2>
            <button onClick={conformOrder}>Conform</button>
          </div>
        </main>
      )}
      {thaliItems.length <= 0 && (
        <h1>Frist Add the items.......!!</h1>
      )}
    </div>
  );
};
export default YourThali;
