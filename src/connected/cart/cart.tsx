import { useQuery, useReactiveVar } from '@apollo/client';
import { SelectBox } from '../../components/select/selectbox';
import { GET_CART_ITEMS } from '../../operations/queries/cart';
import { cartItemsVar } from '../../services/cache';
import './cart.scss';
import { CartItem } from './cartitem';

export const Cart = () => {
    //const cartItemsQueryResult = useQuery(GET_CART_ITEMS);
    const cartItemsQueryResult = useReactiveVar(cartItemsVar);
    console.log({ cartItemsQueryResult });
    return (
        <div className="cart-container">
            <div className="cart-container__body">
                <SelectBox
                    className=""
                    options={[{ label: 'NGN', value: 'NGN' }]}
                />
                <CartItem />
            </div>
            <div className="cart-container__footer"></div>
        </div>
    );
};
