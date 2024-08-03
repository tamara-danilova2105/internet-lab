import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { Additional, classNames } from '../../lib/classNames/classNames';
import styles from './Button.module.scss';

export type ButtonVariant = 'accent' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    variant?: ButtonVariant;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'accent',
        ...otherProps
    } = props;

    const additional: Additional = [
        className,
        styles[variant],
    ]

    return (
        <button 
            className={classNames(styles.button, {}, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
});