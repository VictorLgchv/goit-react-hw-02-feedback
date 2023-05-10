import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <ul>
      <li>{message}</li>
    </ul>
  );
};

Notification.propTypes = {
  messgae: PropTypes.string,
};
