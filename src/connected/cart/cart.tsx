import { SelectBox } from '../../components/select/selectbox';
import { useCartItems } from '../../hooks/useCartItems';
import { ConnectedCartItem } from './cartitem';
import './cart.scss';
import { useCurrency } from '../../hooks/useCurrency';
import { CurrencyType } from '../../@types/Product';

export const Cart = () => {
    const { cartItems } = useCartItems();
    const { currency, currenciesMap, updateCurrency } = useCurrency();
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
                {cartItems.map((item) => (
                    <ConnectedCartItem key={item.id} {...item} />
                ))}
            </div>
            <div className="cart-container__footer"></div>
        </div>
    );
};
