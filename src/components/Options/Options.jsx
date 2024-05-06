import css from "./Options.module.css";

const Options = ({ updateFeedback, feedback, total, onReset }) => {
  return (
    <div>
      <ul className={css.list}>
        {Object.keys(feedback).map((item) => {
          return (
            <li className={css.item} key={item}>
              <button className={css.btn} onClick={() => updateFeedback(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {total > 0 && (
          <li>
            <button className={css.btn} onClick={onReset}>
              reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Options;
