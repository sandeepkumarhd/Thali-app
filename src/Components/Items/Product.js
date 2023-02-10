import ProductItems from "./ProductItems";
import style from "./Product.module.css";
import DUMMY_DATA from "../Dummy Data/DummyData";
const Product = () => {
  return (
    <div className={style.product}>
      {DUMMY_DATA.map((item,index) => {
        return (
          <ProductItems
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};
export default Product;
