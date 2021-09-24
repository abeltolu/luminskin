import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';

export default function removeCartItem(cartItemsVar: ReactiveVar<CartItems>) {
    return (id: number) => {
        const allCartItems = cartItemsVar();
        const newCartItems = allCartItems.filter((item) => item.id !== id);
        cartItemsVar(newCartItems);
    };
}
