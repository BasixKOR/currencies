import { useStore } from 'effector-react';
import { selection, changedUnit, changedTarget } from '../store';
import { jsx, css } from '@emotion/core';
import SymbolTypeAhead from './SymbolTypeahead';

/** @jsx jsx */

const symbols = [
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR',
];
// Retrived from https://api.exchangeratesapi.io/latest, using JSON.stringify(Object.keys(res.rates))
// TODO Reuse getRates function to avoid hard-coded data?

const Container = css`
  margin: 40px auto;
  height: 40px;
  text-align: center;
`;

const Selection = () => {
  const store = useStore(selection);

  return (
    <div css={Container}>
      <datalist id="symbols">
        {symbols.map(s => (
          <option value={s} />
        ))}
      </datalist>
      1
      <SymbolTypeAhead
        symbol={store.unit}
        event={changedUnit}
        datalistId="symbols"
      />
      만큼을
      <SymbolTypeAhead
        symbol={store.target}
        event={changedTarget}
        datalistId="symbols"
      />
      로 사면 얼마일까?
    </div>
  );
};

export default Selection;
