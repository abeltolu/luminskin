import { ReactiveVar } from '@apollo/client';
import { CartItems } from '../../../@types/Cart';
import { allProductsMutations } from '../product';

export default function getCartTotal(cartItemsVar: ReactiveVar<CartItems>) {
    return () => {
        const { getProduct } = allProductsMutations;
        const allCartItems = cartItemsVar();
        const cartTotal = allCartItems.reduce((prev, cur) => {
            const product = getProduct(cur.id);
            if (!product) return prev;

            const itemTotal = product.price * cur.quantity;
            prev += itemTotal;
            return prev;
        }, 0);
        return cartTotal;
    };
}
