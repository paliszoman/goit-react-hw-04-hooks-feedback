import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, returnValue }) => {
  return (
    <ul className={css.btnFrame}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => returnValue(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  returnValue: PropTypes.func.isRequired,
};
