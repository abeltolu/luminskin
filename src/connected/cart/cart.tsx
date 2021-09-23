import { SelectBox } from '../../components/select/selectbox';
import { useCartItems } from '../../hooks/useCartItems';
import { ConnectedCartItem } from './cartitem';
import './cart.scss';
import { useCurrency } from '../../hooks/useCurrency';
import { CurrencyType } from '../../@types/Product';
import { Button } from '../../components/button/button';
import { formatPriceByCurrency } from '../../utils/product';

export const Cart = () => {
    const { cartItems, cartTotal } = useCartItems();
    const { currency, currenciesMap, updateCurrency } = useCurrency();
    const isCartEmpty = !cartItems || !cartItems.length;
    return (
        <div className="cart-container">
            <div className="cart-container__head">
                <SelectBox
                    className="currency-selector"
                    defaultValue={currency}
                    options={currenciesMap}
                    onChange={(e) => {
                        updateCurrency(e.target.value as CurrencyType);
                    }}
                />
            </div>
            <div className="cart-container__body">
                {isCartEmpty ? (
                    <span className="noitems-container">
                        There are no items in your cart.
                    </span>
                ) : (
                    cartItems.map((item) => (
                        <ConnectedCartItem key={item.id} {...item} />
                    ))
                )}
            </div>
            <div className="cart-container__footer">
                <div className="subtotal-container">
                    <span className="subtotal">Subtotal</span>
                    <span className="total-price">
                        {formatPriceByCurrency(cartTotal, currency)}
                    </span>
                </div>
                <Button className="checkout">Proceed To Checkout</Button>
            </div>
        </div>
    );
};
