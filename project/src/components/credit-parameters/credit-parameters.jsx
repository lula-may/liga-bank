import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CreditPriceField from '../credit-price-field/credit-price-field';
import {Credit} from '../../data/credit';

function CreditParameters(props) {
  const {className, credit} = props;
  const {totalSum} = Credit[credit];
  const {
    min: minPrice,
  } = totalSum;

  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => setTotalPrice(minPrice), [minPrice]);
  return (
    <form method="post" id="form-parameters" className={className}>
      <CreditPriceField
        priceParams={totalSum}
        currentPrice={totalPrice}
        onChange={setTotalPrice}
      />
    </form>
  );
}

CreditParameters.propTypes = {
  className: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
};

export default CreditParameters;
