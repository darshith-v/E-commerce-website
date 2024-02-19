export const cart = [];

function addedtoCart() {
  let matchingItem;
      
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`);
  
  const quantity = Number(quantitySelector.value);
  
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
  
}