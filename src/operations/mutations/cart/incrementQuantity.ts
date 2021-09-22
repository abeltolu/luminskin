import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';
import updateCartItem from './updateCartItem';
import getCartItem from './getCartItem';

export default function incrementQuantity(
    cartItemsVar: ReactiveVar<CartItems>
) {
    return (id: number) => {
        const cartItem = getCartItem(cartItemsVar)(id);
        if (!cartItem) return;

        updateCartItem(cartItemsVar)({
            ...cartItem,
            quantity: cartItem.quantity + 1,
        });
    };
}
