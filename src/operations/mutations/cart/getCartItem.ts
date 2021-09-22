import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';

export default function getCartItem(cartItemsVar: ReactiveVar<CartItems>) {
    return (id: number) => {
        const allCartItems = cartItemsVar();
        const cartItem = allCartItems.find((item) => item.id === id);
        return cartItem;
    };
}
