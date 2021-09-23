import { CartItem as CartItemType } from '../../@types/Cart';
import { CartItem } from '../../components/cart/cartitem';
import { useCartItems } from '../../hooks/useCartItems';
import { useCurrency } from '../../hooks/useCurrency';
import { useProduct } from '../../hooks/useProducts';

export const ConnectedCartItem = ({ id, quantity }: CartItemType) => {
    const { data } = useProduct({ productId: id });
    const { currency } = useCurrency();
    const { incrementQuantity, decrementQuantity } = useCartItems();
    if (!data) return null;
    return (
        <CartItem
            {...data}
            price={quantity * data.price}
            currency={currency}
            quantity={quantity}
            onDecrementQuantity={() => incrementQuantity(id)}
            onIncrementQuantity={() => decrementQuantity(id)}
        />
    );
};
