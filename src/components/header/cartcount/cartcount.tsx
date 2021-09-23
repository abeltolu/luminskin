import './cartcount.scss';

interface ICarCountProps {
    count?: number;
    onClick?: () => void;
}
export const CartCount = ({ count = 0, onClick }: ICarCountProps) => {
    return (
        <div className="cartcount" onClick={onClick}>
            <img src="/cart-icon.png" alt="Lumin Cart Icon" />
            <span className="total-items">{count}</span>
        </div>
    );
};
