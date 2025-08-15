
export function calcDiscountPrice(price, discount) {
  if (!discount) return price;

  const discountMount = (price * discount) / 100;

  const finalPrice = price - discountMount;
  return finalPrice;
}
