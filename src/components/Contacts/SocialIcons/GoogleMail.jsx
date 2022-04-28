import PropTypes from 'prop-types';

const GoogleMail = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill={color}
    >
      <path
        d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z"
        color="#b8bcb8"
      ></path>
    </svg>
  );
};

export default GoogleMail;

GoogleMail.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
