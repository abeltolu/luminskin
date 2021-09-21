import { ButtonHTMLAttributes } from 'react';
import './button.scss';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = (props: IButtonProps) => {
    return <button {...props} className="button" />;
};
