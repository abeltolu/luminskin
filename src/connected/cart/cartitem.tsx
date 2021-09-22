import { QuantitySelector } from '../../components/cart/quantity-selector';
import './cartitem.scss';
export const CartItem = () => {
    return (
        <div className="cartitem-container">
            <div className="product-info">
                <span className="product-title">Up to Management</span>
                <div className="product-actions">
                    <div>
                        <QuantitySelector
                            count={2}
                            onDecrement={() => null}
                            onIncrement={() => null}
                        />
                    </div>
                    <span className="product-price">NGN 24,000</span>
                </div>
            </div>
            <div className="product-image">
                <img
                    src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
                    alt=""
                />
            </div>
        </div>
    );
};
