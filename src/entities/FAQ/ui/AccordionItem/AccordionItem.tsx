import { memo } from "react";
import styles from './AccordionItem.module.scss';
import { IAccordionItem } from "../../lib/data";
import { closeIcon, openIcon } from "@/shared/assets/svg/accordionIcons";

interface AccordionItemProps {
    element: IAccordionItem;
    isOpen: boolean;
    onClick: () => void;
}

export const AccordionItem = memo((props: AccordionItemProps) => {
    const {
        element,
        isOpen,
        onClick,
    } = props;

    const { question, answer } = element;

    return (
        <li className={styles.li}>
            <button
                className={styles.btn}
                onClick={onClick}
            >
                <span className={styles.question}>{question}</span>
                <span> {isOpen ? closeIcon() : openIcon()}</span>
            </button>
            {
                isOpen &&
                <div className={styles.answer}>
                    {answer}
                </div>
            }
        </li>
    );
});
