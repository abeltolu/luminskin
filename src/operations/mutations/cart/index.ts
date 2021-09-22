import { cartItemsVar } from '../../../services/cache';
import addCartItem from './addItem';
import decrementQuantity from './decrementQuantity';
import incrementQuantity from './incrementQuantity';

export const cartItemMutations = {
    decrementQuantity: decrementQuantity(cartItemsVar),
    incrementQuantity: incrementQuantity(cartItemsVar),
    addCartItem: addCartItem(cartItemsVar),
};
