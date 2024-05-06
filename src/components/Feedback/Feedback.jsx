import style from "./Feedback.module.css";

const Feedback = ({ data, total, positive }) => {
  return (
    <div>
      <ul className={style.list}>
        {Object.entries(data).map(([name, number]) => {
          return (
            <li className={style.item} key={name}>
              {name}: {number}
            </li>
          );
        })}
      </ul>

      <p className={style.item}>Total points: {total}</p>

      <p className={style.item}>Positive: %{positive} </p>
    </div>
  );
};
export default Feedback;
