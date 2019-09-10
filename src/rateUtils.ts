interface ExchangeRates extends Record<string, number> {}

export function rate(rates: ExchangeRates) {
  return {
    toBase (currency: string, amount: number = 0) {
      return amount / rates[currency]
    },
    fromBase (currency: string, amount: number = 0) {
      return amount * rates[currency]
    }
  }
}