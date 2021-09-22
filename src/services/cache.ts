import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { CartItems } from '../@types/Cart';
import { Currency } from '../@types/Product';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cartItems: {
                    read() {
                        return cartItemsVar();
                    },
                },
                currency: {
                    read() {
                        return currencyVar();
                    },
                },
                showCartDrawer: {
                    read() {
                        return showCartDrawerVar();
                    },
                },
            },
        },
    },
});

export const cartItemsVar: ReactiveVar<CartItems> = makeVar<CartItems>([]);
export const currencyVar = makeVar<keyof typeof Currency>('USD');
export const showCartDrawerVar = makeVar<boolean>(false);
