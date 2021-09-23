import { cartItemsVar } from '../../../services/cache';
import addCartItem from './addItem';
import decrementQuantity from './decrementQuantity';
import getCartTotal from './getCartTotal';
import incrementQuantity from './incrementQuantity';

export const cartItemMutations = {
    decrementQuantity: decrementQuantity(cartItemsVar),
    incrementQuantity: incrementQuantity(cartItemsVar),
    addCartItem: addCartItem(cartItemsVar),
    getCartTotal: getCartTotal(cartItemsVar),
};
