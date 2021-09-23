import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import './button.scss';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ className, ...props }: IButtonProps) => {
    return <button {...props} className={classNames('button', className)} />;
};
