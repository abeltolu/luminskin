import { ReactiveVar } from '@apollo/client';
import { CartItems, CartItem } from '../../../@types/Cart';

export default function updateCartItem(cartItemsVar: ReactiveVar<CartItems>) {
    const updateItem = (item: CartItem, cartItems: CartItems) => {
        return cartItems.reduce((prev: CartItem[], cur: CartItem) => {
            if (cur.id === item.id) {
                cur = { ...cur, ...item };
            }
            prev.push(cur);
            return prev;
        }, []);
    };
    return (item: CartItem) => {
        const allCartItems = cartItemsVar();
        cartItemsVar(updateItem(item, allCartItems));
    };
}
