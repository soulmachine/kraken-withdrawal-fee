#!/usr/bin/env node
const { getWithdrawalFee } = require("./index");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: kraken-withdrawal-fee <symbol>");
  process.exit(0);
}

console.info(getWithdrawalFee(args[0]));
