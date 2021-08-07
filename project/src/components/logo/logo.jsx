import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Logo({className}) {
  return (
    <Link className={className} to="/" aria-label="На главную">
      <img src="./img/logo-mobile.svg" width="150" height="25" alt="Логотип Лига Банк" />
    </Link>

  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
