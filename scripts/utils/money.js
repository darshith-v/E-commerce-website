 export function formateCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

export default formateCurrency;