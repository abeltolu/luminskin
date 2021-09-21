import { SelectHTMLAttributes } from 'react';
import './selectbox.scss';

type OptionItem = {
    value: string;
    label: string;
};
interface ISelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: OptionItem[];
}
export const SelectBox = ({ options, ...props }: ISelectBoxProps) => {
    if (!options || !options.length) return null;
    return (
        <select {...props} className="selectbox">
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
