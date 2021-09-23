import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { CartItems } from '../@types/Cart';
import { CurrencyType, Product } from '../@types/Product';

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
export const currencyVar = makeVar<CurrencyType>('USD');
export const showCartDrawerVar = makeVar<boolean>(false);
export const allProductsVar = makeVar<Product[]>([]);
