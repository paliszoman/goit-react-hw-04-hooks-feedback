import css from './Statistica.module.css';
import PropTypes from 'prop-types';

export const Statistica = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total > 0 ? ( // if we have data in state
    <ul className={css.statistic}>
      <li key="1" className={css.stat}>
        Good: {good}
      </li>
      <li key="2" className={css.stat}>
        Neutral: {neutral}
      </li>
      <li key="3" className={css.stat}>
        Bad: {bad}
      </li>
      <li key="4" className={css.stat}>
        Total: {total}
      </li>
      <li key="5" className={css.stat}>
        Positive Feedback: {Math.floor(positivePercentage * 100)}%
      </li>
    </ul>
  ) : (
    <div className={css.zeroFeed}>There is no feedback!</div>
  ); // 0 data in state
};
Statistica.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
