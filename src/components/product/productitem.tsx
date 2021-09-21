import { Button } from '../button/button';
import './productitem.scss';

interface IProductItemProps {
    imageUrl: string;
    title: string;
    price: string;
    currencyCode: string;
}

export const ProductItem = ({
    imageUrl,
    title,
    price,
    currencyCode,
}: IProductItemProps) => {
    return (
        <div className="productitem">
            <div className="productitem__image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="productitem__details">
                <div className="priceinfo">
                    <h2 className="title">{title}</h2>
                    <span className="price">{`${currencyCode} ${price}`}</span>
                </div>
                <Button>Add to Cart</Button>
            </div>
        </div>
    );
};
