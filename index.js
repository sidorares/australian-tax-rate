module.exports = function getTaxRate(income) {
  if (income <= 18200)
    return 0;
  if (income <= 37000)
    return 0.19 - 3458/income;
  if (income <= 80000)
    return 0.325 - 8453/income;
  if (income <= 180000)
    return 0.37 - 12053/income;
  return 0.45 - 26453/income;
};
