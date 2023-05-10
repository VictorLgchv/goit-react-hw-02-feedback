import PropTypes from 'prop-types';
import { Div, Ul } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percentage,
  children,
}) => {
  return (
    <Div>
      <h2>Statistics</h2>
      {children}
      {total > 0 && (
        <Ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Percentage: {percentage ? percentage : 0}%</li>
        </Ul>
      )}
    </Div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
