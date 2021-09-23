import { SelectHTMLAttributes } from 'react';
import classnames from 'classnames';
import './selectbox.scss';

type OptionItem = {
    value: string;
    label: string;
};
interface ISelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: OptionItem[];
}
export const SelectBox = ({
    options,
    className,
    ...props
}: ISelectBoxProps) => {
    if (!options || !options.length) return null;
    return (
        <select {...props} className={classnames('selectbox', className)}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
