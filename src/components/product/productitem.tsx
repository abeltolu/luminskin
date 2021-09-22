import { Product } from '../../@types/Product';
import { Button } from '../button/button';
import './productitem.scss';

interface IProductItemProps extends Partial<Product> {
    currencyCode: string;
    onAddToCart: () => void;
}

export const ProductItem = ({
    image_url,
    title,
    price,
    currencyCode,
    onAddToCart,
}: IProductItemProps) => {
    return (
        <div className="productitem">
            <div className="productitem__image">
                <img src={image_url} alt={title} />
            </div>
            <div className="productitem__details">
                <div className="priceinfo">
                    <h2 className="title">{title}</h2>
                    <span className="price">{`${currencyCode} ${price}`}</span>
                </div>
                <Button onClick={onAddToCart}>Add to Cart</Button>
            </div>
        </div>
    );
};
