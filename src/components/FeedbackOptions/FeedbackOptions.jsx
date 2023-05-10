import PropTypes from 'prop-types';
import { Div, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map(item => (
        <Btn type="button" key={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Btn>
      ))}
    </Div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
