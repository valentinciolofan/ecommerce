import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

export const userSession = atom(null);

export const wishlistProducts = atom(null);

export const searchBoxValue = atom('');

export const productDetailsStore = atom('');

export async function checkSession() {
    try {
       const response = await fetch('https://www.valentinciolofan.com/check-session', {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        const {loggedIn, status, userInfo} = await response.json();
        
        if (loggedIn && status === 200 && userInfo !== undefined) {
            userSession.set(userInfo);
        } else {
            userSession.set(null);
        }
    } catch (error) {
        console.log('Fetch failed, check the reason:', error);
        userSession.set(null);
    }
}


// Use persistentAtom to store the cart state in localStorage
export const cartStore = persistentAtom('cart', {
  items: [],
  total: 0
}, {
  encode: JSON.stringify,
  decode: JSON.parse
});

export function addToCart(product) {
  const currentCart = cartStore.get();
  const existingItem = currentCart.items.find(item => item.slug === product.slug && item.size === product.size);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    currentCart.items.push({ ...product, quantity: 1 });
  }

  calculateTotal(currentCart);
}


export function removeFromCart(productSlug) {
  // Get the current state of the cart
  const currentCart = cartStore.get();

  // Filter out the item that needs to be removed
  const updatedItems = currentCart.items.filter(item => item.slug !== productSlug);

  // Create a new cart object with the updated items
  const updatedCart = {
    ...currentCart, // Copy over the existing cart properties
    items: updatedItems // Replace the items array with the updated one
  };

  // Recalculate the total after removing the item
  calculateTotal(updatedCart);

  // Update the cart store with the new cart object
  cartStore.set(updatedCart);
}
export const decreaseQuantity = (productSlug) => {
  const currentCart = cartStore.get();
  const updatedItems = currentCart.items.map(item => {
    return item.slug === productSlug.itemSlug && item.quantity > 0
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });

  cartStore.set({ ...currentCart, items: updatedItems });
  calculateTotal({ ...currentCart, items: updatedItems });
};

export const increaseQuantity = (productSlug) => {
  const currentCart = cartStore.get();
  const updatedItems = currentCart.items.map(item => {
    return item.slug === productSlug.itemSlug
      ? { ...item, quantity: item.quantity + 1 }
      : item;
  });

  cartStore.set({ ...currentCart, items: updatedItems });
  calculateTotal({ ...currentCart, items: updatedItems });
};


function calculateTotal(currentCart) {
  // Calculate the new total based on items in the cart
  const total = currentCart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Create a new cart object with the updated total
  const updatedCart = {
    ...currentCart, // Spread the existing properties
    total, // Update the total
  };
  
  // Set the new cart state in the store
  cartStore.set(updatedCart);
}

