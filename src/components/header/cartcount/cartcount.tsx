import './cartcount.scss';

interface ICarCountProps {
    count?: number;
}
export const CartCount = ({ count = 0 }: ICarCountProps) => {
    return (
        <a href="/cart" className="cartcount">
            <img src="/cart-icon.png" alt="Lumin Cart Icon" />
            <span className="total-items">{count}</span>
        </a>
    );
};
