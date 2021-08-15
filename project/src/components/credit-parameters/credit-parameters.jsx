import React, {useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CreditPriceField from '../credit-price-field/credit-price-field';
import {Credit} from '../../data/credit';

function CreditParameters(props) {
  const {className, credit} = props;
  const {totalSum} = Credit[credit];
  const {
    min: minPrice,
    max: maxPrice,
    step: priceStep,
  } = totalSum;

  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = useCallback((evt) => setTotalPrice(evt.target.value), []);

  const handleMinusClick = useCallback((evt) => {
    evt.preventDefault();
    let newPrice = Number(totalPrice) - priceStep;
    newPrice = (newPrice < minPrice) ? minPrice : newPrice;
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [minPrice, priceStep, totalPrice]);

  const handlePlusClick = useCallback((evt) => {
    evt.preventDefault();
    let newPrice = Number(totalPrice) + priceStep;
    newPrice = (newPrice > maxPrice) ? maxPrice : newPrice;
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [maxPrice, priceStep, totalPrice]);

  useEffect(() => setTotalPrice(minPrice), [minPrice]);
  return (
    <form method="post" id="form-parameters" className={className}>
      <CreditPriceField
        priceParams={totalSum}
        currentPrice={totalPrice}
        onMinusClick={handleMinusClick}
        onPlusClick={handlePlusClick}
        onChange={handlePriceChange}
      />
    </form>
  );
}

CreditParameters.propTypes = {
  className: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  // credit: PropTypes.shape({
  //   minLoanSum: PropTypes.number.isRequired,
  //   messageText: PropTypes.string.isRequired,
  //   totalSum: PropTypes.shape({
  //     label: PropTypes.string.isRequired,
  //     min: PropTypes.number.isRequired,
  //     max: PropTypes.number.isRequired,
  //     step: PropTypes.number.isRequired,
  //   }).isRequired,
  //   initialPayment: PropTypes.shape({
  //     min: PropTypes.number.isRequired,
  //     step: PropTypes.number.isRequired,
  //     unit: PropTypes.string.isRequired,
  //   }).isRequired,
  //   period: PropTypes.shape({
  //     min: PropTypes.number.isRequired,
  //     max: PropTypes.number.isRequired,
  //     unit: PropTypes.string.isRequired,
  //   }),
  // }),
};

export default CreditParameters;
