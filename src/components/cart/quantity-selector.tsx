import './quantity-selector.scss';

interface IProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}
export const QuantitySelector = ({
    count,
    onDecrement,
    onIncrement,
}: IProps) => {
    return (
        <div className="quantity-selector-container">
            <span className="action" onClick={onDecrement}>
                -
            </span>
            <span className="number">{count}</span>
            <span className="action" onClick={onIncrement}>
                +
            </span>
        </div>
    );
};
