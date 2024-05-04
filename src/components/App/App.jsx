import React, { useState, useEffect } from 'react';
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from '../Notification/Notification';


export default function App() {
const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 }
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} /> : <Notification />}
    </>
  )
}



