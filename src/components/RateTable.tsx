import { jsx, css } from '@emotion/core';
import { useList } from 'effector-react';
import { rates, selection } from '../store';

/** @jsx jsx */

const Table = css`
  max-width: 60vw;
  margin: 0 auto;
  @media (max-width: 1366px) {
    max-width: 90vw;
  }
  .row {
    display: flex;
    font-size: 1.7rem;
    .item {
      font-family: 'Manrope', sans-serif;
      font-weight: 600;
      flex: 3;
      &.currency {
        flex: 1;
      }
      &.price {
        color: #219653;
      }
    }
  }
`;

const RateTable = () => {
  const list = useList(rates, item => (
    <div className="row">
      <div className="item currency">{item.currency}</div>
      <div className="item price">
        {item.price} {selection.getState().target}
      </div>
      <div className="item unitPrice">
        {item.unitPrice !== 1 ? `${item.unitPrice} ${item.currency}` : ''}
      </div>
    </div>
  ));

  return <div css={Table}>{list}</div>;
};

export default RateTable;
