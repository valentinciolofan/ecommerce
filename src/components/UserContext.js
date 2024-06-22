import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

export const userSession = atom(null);

export const wishlistProducts = atom(null);

export const searchBoxValue = atom('');

export async function checkSession() {
    try {
       const response = await fetch('http://localhost:3000/check-session', {
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
  const existingItem = currentCart.items.find(item => item.slug === product.slug);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    currentCart.items.push({ ...product, quantity: 1 });
  }

  calculateTotal(currentCart);
}


export function removeFromCart(productSlug) {
  const currentCart = cartStore.get();
  const updatedItems = currentCart.items.filter(item => item.slug !== productSlug);

  currentCart.items = updatedItems;
  calculateTotal(currentCart);
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
  const total = currentCart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  currentCart.total = total;
  cartStore.set(currentCart);
}
