import { ReactNode, memo } from "react";
import styles from './Text.module.scss';
import { Additional, classNames } from "@/shared/lib/classNames/classNames";

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li';
export type TextSize = 's' | 'm' | 'l' | 'xl';
export type TextWeight = 'normal' | 'bold';
export type TextColor = 'black' | 'darkGrey'

interface TextProps {
    className?: string;
    children: ReactNode;
    tag?: TextTag;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        children,
        tag = 'p',
        size,
        weight = 'normal',
        color = 'black',
    } = props;

    const mapTextTag: Record<TextTag, TextTag> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
        li: 'li'
    };

    const TextTag = mapTextTag[tag];

    const additional: Additional = [
        className,
        styles[size],
        styles[weight],
        styles[color],
    ]

    return (
        <TextTag 
            className={classNames('', {}, additional)}
        >
            {children}
        </TextTag>
    );
});