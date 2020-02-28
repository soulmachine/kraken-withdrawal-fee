# kraken-withdrawal-fee

Kraken Withdrawal Fees and Minimums.

## How to use

```javascript
const { getWithdrawalFee } = require("kraken-withdrawal-fee");

console.info(getWithdrawalFee("BTC"));
```

## API Manual

There is only one API in this library:

```typescript
/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The currency symbol, e.g., BTC, ETH, USDT, etc.
 * @returns The WithdrawalFee
 */
export function getWithdrawalFee(symbol: string): WithdrawalFee;
```

Which returns an `WithdrawalFee`:

```typescript
export interface WithdrawalFee {
  symbol: string;
  platform?: string;
  fee: number;
  min: number;
}
```

## References

- [Cryptocurrency withdrawal fees and minimums - Kraken](https://support.kraken.com/hc/en-us/articles/360000767986-Cryptocurrency-withdrawal-fees-and-minimums)
