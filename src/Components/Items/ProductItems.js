import Card from "../ItemCard/Card";
import style from "./ProductItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { thaliActions } from "../../Redux Store/yourThaliStore";

const ProductItems = (props) => {
  const { id, image, title, price } = props;
  const quentity = useSelector((state) => state.thali.thaliItem);
  const totalQuentity = quentity.map((item) => {
    return item.quentity;
  })
  const dispatch = useDispatch()
  const addToThaliHandler = () => {
    dispatch(thaliActions.addItemToThali({ id, image, title, price }));
  };
  return (
    <div className={style.productCard}>
      <div>
        <Card>
          <img src={props.image} alt="" />
          <h2>{props.title}</h2>
          <h5> ₹ {props.price.toFixed(2)}</h5>
          <button onClick={addToThaliHandler}>Add To Thali</button>
        </Card>
      </div>
    </div>
  );
};
export default ProductItems;
