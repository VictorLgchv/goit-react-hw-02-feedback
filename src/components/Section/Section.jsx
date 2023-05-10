import PropTypes from 'prop-types';
import { Div } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Div>
      {title && <h2>{title}</h2>}
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
