import { Product, CurrencyType } from '../../@types/Product';
import { QuantitySelector } from './quantity-selector';
import './cartitem.scss';
import { formatPriceByCurrency } from '../../utils/product';

interface ICartItem extends Omit<Product, '__typename'> {
    quantity: number;
    currency: CurrencyType;
    onIncrementQuantity: () => void;
    onDecrementQuantity: () => void;
}
export const CartItem: React.FC<ICartItem> = ({
    title,
    image_url,
    price,
    currency,
    quantity,
    onIncrementQuantity,
    onDecrementQuantity,
}) => {
    return (
        <div className="cartitem-container">
            <div className="product-info">
                <span className="product-title">{title}</span>
                <div className="product-actions">
                    <div>
                        <QuantitySelector
                            count={quantity}
                            onDecrement={onIncrementQuantity}
                            onIncrement={onDecrementQuantity}
                        />
                    </div>
                    <span className="product-price">
                        {formatPriceByCurrency(price, currency)}
                    </span>
                </div>
            </div>
            <div className="product-image">
                <img src={image_url} alt={title} />
            </div>
        </div>
    );
};
