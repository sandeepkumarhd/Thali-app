import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <div  className={style.card}>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
