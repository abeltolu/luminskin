import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';
import incrementQuantity from './incrementQuantity';
import getCartItem from './getCartItem';

export default function addCartItem(cartItemsVar: ReactiveVar<CartItems>) {
    return (id: number) => {
        const allCartItems = cartItemsVar();

        //if item already exists, increment quantity
        if (!!getCartItem(cartItemsVar)(id)) {
            incrementQuantity(cartItemsVar)(id);
            return;
        }
        cartItemsVar(allCartItems.concat([{ id, quantity: 1 }]));
    };
}
