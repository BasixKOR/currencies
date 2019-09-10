import { jsx, css } from '@emotion/core';
import { useList } from 'effector-react';
import { rates } from '../store';

/** @jsx jsx */

const RateTable = () => {
  const list = useList(rates, item => (
    <div>
      {item.currency} - {item.price} - {item.unitPrice}
    </div>
  ));

  return <div>{list}</div>;
};

export default RateTable;
