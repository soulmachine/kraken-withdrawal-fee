export interface WithdrawalFee {
  symbol: string;
  platform?: string;
  fee: number;
  min: number;
}

/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The currency symbol, e.g., BTC, ETH, USDT, etc.
 * @returns The WithdrawalFee
 */
export declare function getWithdrawalFee(symbol: string): WithdrawalFee;
