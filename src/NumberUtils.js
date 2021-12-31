const { isNullOrEmpty } = require("./Components/TextUtils");

// export const getFormattedPrice = (originalPrice) => {
//     var amount = 0.00
//     if (!isNullOrEmpty(originalPrice)) {
//         amount = parseFloat(originalPrice)
//     }
//     return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// }
export const getFormattedNumber = (originalPrice) => {
  var amount = 0.0;
  if (!isNullOrEmpty(originalPrice)) {
    amount = parseFloat(originalPrice);
  }
  return amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
export const priceInThousand = (number, decimals, recursiveCall) => {
  debugger;
  const decimalPoints = decimals || 2;
  const noOfLakhs = number / 100000;
  let displayStr;
  let isPlural;

  // Rounds off digits to decimalPoints decimal places
  function roundOf(integer) {
    return +integer.toLocaleString(undefined, {
      minimumFractionDigits: decimalPoints,
      maximumFractionDigits: decimalPoints,
    });
  }
  if (noOfLakhs < 1) {
    displayStr = getFormattedNumber(number);
    return displayStr;
  } else if (noOfLakhs >= 1 && noOfLakhs <= 99.9) {
    const lakhs = roundOf(noOfLakhs);
    isPlural = lakhs > 1 && !recursiveCall;
    displayStr = `${lakhs} Lac${isPlural ? "s" : ""}`;
  } else if (noOfLakhs >= 100) {
    const crores = roundOf(noOfLakhs / 100);
    const crorePrefix =
      crores >= 100000 ? this.priceInThousand(crores, decimals, true) : crores;
    isPlural = crores > 1 && !recursiveCall;
    displayStr = `${crorePrefix} Crore${isPlural ? "s" : ""}`;
  } else {
    displayStr = roundOf(+number);
  }
  return displayStr;
};
