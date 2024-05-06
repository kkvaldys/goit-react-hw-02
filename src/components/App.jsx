import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";

const data = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  // **Variant 1**
  // const [feedback, setFeedback] = useState(() => {
  //   const savedInfo = window.localStorage.getItem("saved");

  //   if (savedInfo !== null) {
  //     return JSON.parse(savedInfo);
  //   }
  //   return data
  // });
  // **Variant 2**
  const [feedback, setFeedback] = useState(
    () => JSON.parse(window.localStorage.getItem("saved")) || data
  );
  useEffect(() => {
    window.localStorage.setItem("saved", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  // const totalFeedback = () => {
  //   return Object.values(feedback).reduce((acc, item) => {
  //     return acc + item;
  //   }, 0);
  // };
  // const total = totalFeedback();
  const total = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = () => {
    const goodCount = feedback.good;
    if (!total) {
      return 0;
    }
    return Math.round((goodCount / total) * 100);
  };
  const positive = positiveFeedback();

  return (
    <div>
      <Description />
      <Options
        onReset={onReset}
        feedback={feedback}
        updateFeedback={updateFeedback}
        total={total}
      />

      {total ? (
        <Feedback positive={positive} total={total} data={feedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
