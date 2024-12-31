const currencies = [
  {
    id: 1,
    name: 'UAH',
    amount: 100_000
  },
  {
    id: 2,
    name: 'USD',
    amount: 40_000
  },
  {
    id: 3,
    name: 'EUR',
    amount: 30_000
  }
];

export const currenciesRecord = currencies.reduce<Record<string, (typeof currencies)[number]>>((record, currency) => {
  record[currency.id] = currency;
  return record;
}, {});

export default currencies;
