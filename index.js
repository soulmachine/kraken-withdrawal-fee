const assert = require("assert").strict;

/**
 * Withdrawal fee.
 *
 * @typedef {Object} WithdrawalFee
 * @property {string} symbol
 * @property {string} platform
 * @property {number} fee
 * @property {number} min
 */

/** @type {{[key:string]: WithdrawalFee}} */
const data = require("./data.json");

/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The currency symbol, e.g., BTC, ETH, USDT, etc.
 * @returns The WithdrawalFee
 */
function getWithdrawalFee(symbol) {
  assert.ok(symbol);
  return data[symbol];
}

function getAllWithdrawalFees() {
  return data;
}

module.exports = { getWithdrawalFee, getAllWithdrawalFees };
