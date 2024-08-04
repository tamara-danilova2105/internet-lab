import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    defaultValue?: string | number;
    label?: string;
    isError?: boolean;
    helperText?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    const { 
        className, 
        defaultValue = '', 
        label, 
        isError,
        helperText,
        onChange, 
        ...otherProps 
    } = props;

    const [value, setValue] = useState(defaultValue);

    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange?.(e);           
    };

    const mods: Mods = {
        [styles.isError]: isError,
    };

    return (
        <div className={styles.form_group}>
            <input 
                className={classNames(styles.input, mods, [className])}
                placeholder={label}
                value={value}
                onChange={handlerInput}
                {...otherProps}
            />
            <label className={styles.label}>Label</label>
            <span className={styles.helper_text}>{helperText}</span>
        </div>
    );
};
