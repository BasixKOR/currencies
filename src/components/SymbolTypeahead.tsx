import { jsx, css } from '@emotion/core';
import { useRef } from 'react';
import { Event as EffectorEvent } from 'effector';
import React from 'react';

/** @jsx jsx */

const Input = css`
  border: 1px solid #27ae60;
  background-color: #f2f2f2;
  height: 38px;
  width: 3em;
  padding: 0 1rem;
  margin: 0 1rem;
  font-family: 'Manrope', sans-serif;
`;

const SymbolTypeahead: React.FC<{
  symbol: string;
  event: EffectorEvent<string>;
  datalistId: string;
}> = ({ symbol, event, datalistId }) => {
  let symbolInput = useRef<HTMLInputElement>(null);
  let inputEvent = event.prepend<React.FormEvent<HTMLInputElement>>(
    e => (e.target as HTMLInputElement).value || ''
  );

  return (
    <input
      type="text"
      defaultValue={symbol}
      ref={symbolInput}
      css={Input}
      maxLength={3}
      onInput={inputEvent}
      list={datalistId}
    />
  );
};

export default SymbolTypeahead;
