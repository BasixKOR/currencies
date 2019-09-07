import { createStore, createEvent, createEffect, createDomain } from 'effector';

interface Selection {
  unit: string;
  target: string;
}

export const SelectionDomain = createDomain('selection domain');
export const changedSource = SelectionDomain.event<string>(
  'changed source (from) currency'
);
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
  .on(changedUnit, (state, unit) => ({ ...state, unit }))
  .on(changedTarget, (state, target) => ({ ...state, target }));

