const currencies = [
  {
    id: 1,
    name: 'UAH'
  },
  {
    id: 2,
    name: 'USD'
  },
  {
    id: 3,
    name: 'EUR'
  }
];

export const currenciesRecord = currencies.reduce<Record<string, (typeof currencies)[number]>>((record, currency) => {
  record[currency.id] = currency;
  return record;
}, {});

export default currencies;
