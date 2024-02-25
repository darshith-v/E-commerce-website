export let cart = JSON.parse(localStorage.getItem('cart'));
  
if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }]
};
  

function saveDataLocally() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addedtoCart(productId) {
  let matchingItem;
      
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
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
  
  saveDataLocally()
}

export function removeFromCart(productId) {
  const newCart = []

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveDataLocally()
}

const addedMessageTimeouts = {};

export function calculateCartQuantity(productId) {
  let cartQuantity = 0;
    
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;


  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

  addedMessage.classList.add('js-added-to-cart');
  
  setTimeout(() => {
    const previousTimeoutId = addedMessageTimeouts[productId];
    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }
  
    const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('js-added-to-cart')
    }, 2000);
  
    addedMessageTimeouts[productId] = timeoutId;
    
  });
  return cartQuantity;
}

