import { useCallback, useState } from 'react';
import { accordionFaq } from '../../lib/data';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import styles from './Accordion.module.scss';

export const Accordion = () => {
    const [collapse, setCollapse] = useState<number | null>(3);

    const accordionHendler = useCallback((id: number) => {
        setCollapse(prevCollapse => id === prevCollapse ? null : id);
    }, []);

    return (
        <ul className={styles.list}>
            {accordionFaq.map(el => 
                <AccordionItem 
                    key={el.id} 
                    onClick={() => accordionHendler(el.id)}
                    element={el}
                    isOpen={el.id === collapse}
                />
            )}
        </ul>
    );
};
