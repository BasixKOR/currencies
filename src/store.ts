import { createDomain } from 'effector';

// TODO Move primary logic from definition
interface Selection {
  unit: string;
  target: string;
}

export const SelectionDomain = createDomain('selection domain');
export const changedUnit = SelectionDomain.event<string>(
  'changed unit (through) currency'
);
export const changedTarget = SelectionDomain.event<string>(
  'changed target (to) currency'
);

export const selection = SelectionDomain.store<Selection>({
  unit: 'USD',
  target: 'KRW',
})
  .on(changedUnit.filter({ fn: v => v.length === 3 }), (state, unit) => ({
    ...state,
    unit,
  }))
  .on(changedTarget.filter({ fn: v => v.length === 3 }), (state, target) => ({
    ...state,
    target,
  }));

interface Rates {
  [currency: string]: {
    price: number; // The price calculated through unit
    unitPrice: number; // The price of unit currency, calcuated in `currency`
  };
}

export const RateDomain = createDomain('rates domain');
export const getRates = RateDomain.effect<Selection, Rates, Error>(
  'get rates'
).use(async selection => {
  const res = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${selection.unit}`
  );
  const json = await res.json(); // json.rates contains key-value pair of currency symbol and price of unit currency
  const data: Rates = {};
  for (const rate in json.rates)
    data[rate] = {
      price: json.rates[selection.target] * (1 / json.rates[rate]),
      unitPrice: json.rates[rate],
    };
  return data;
});

selection.watch(state => {
  getRates(state);
});

export const rates = RateDomain.store<Rates>({}).on(
  getRates.done,
  (_, { result }) => ({ ...result })
);
