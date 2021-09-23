import { useReactiveVar } from '@apollo/client';
import { cartItemMutations } from '../operations/mutations/cart';
import { cartItemsVar } from '../services/cache';

export function useCartItems() {
    const cartItems = useReactiveVar(cartItemsVar);
    return {
        cartItems,
        itemsCount: cartItems.length,
        ...cartItemMutations,
    };
}
