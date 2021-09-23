import { useReactiveVar } from '@apollo/client';
import { useMemo } from 'react';
import { cartItemMutations } from '../operations/mutations/cart';
import { allProductsVar, cartItemsVar } from '../services/cache';

export function useCartItems() {
    const cartItems = useReactiveVar(cartItemsVar);
    const allProducts = useReactiveVar(allProductsVar);
    const { getCartTotal } = cartItemMutations;
    const cartTotal = useMemo(getCartTotal, [
        allProducts,
        getCartTotal,
        cartItems,
    ]);
    return {
        cartItems,
        cartTotal,
        itemsCount: cartItems.length,
        ...cartItemMutations,
    };
}
