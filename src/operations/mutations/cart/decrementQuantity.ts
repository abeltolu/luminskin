import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';
import updateCartItem from './updateCartItem';
import getCartItem from './getCartItem';

export default function decrementQuantity(
    cartItemsVar: ReactiveVar<CartItems>
) {
    return (id: number) => {
        const cartItem = getCartItem(cartItemsVar)(id);
        if (!cartItem || cartItem.quantity === 1) return;

        updateCartItem(cartItemsVar)({
            ...cartItem,
            quantity: cartItem.quantity - 1,
        });
    };
}
