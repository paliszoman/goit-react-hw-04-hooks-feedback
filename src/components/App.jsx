import React, { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistica } from './Statistica/Statistica.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeut] = useState(0);
  const [bad, setBad] = useState(0);

  const takeFeedback = option => {
    if (option === 'Good') {
      return setGood(good + 1);
    }
    if (option === 'Neutral') {
      return setNeut(neutral + 1);
    }
    if (option === 'Bad') {
      return setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return good / countTotalFeedback(); //precentage value as number
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          returnValue={option => takeFeedback(option)}
        />
      </Section>
      <Section title="Statistics">
        <Statistica
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
