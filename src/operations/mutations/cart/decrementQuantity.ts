import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';
import updateCartItem from './updateCartItem';
import getCartItem from './getCartItem';
import removeCartItem from './removeItem';

export default function decrementQuantity(
    cartItemsVar: ReactiveVar<CartItems>
) {
    return (id: number) => {
        const cartItem = getCartItem(cartItemsVar)(id);
        if (!cartItem) return; //cart item does not exist

        //if the quantity is 1 and the "-" button is pressed it should remove the item.
        if (cartItem.quantity === 1) {
            removeCartItem(cartItemsVar)(id);
            return;
        }

        //update cart item quantity
        updateCartItem(cartItemsVar)({
            ...cartItem,
            quantity: cartItem.quantity - 1,
        });
    };
}
