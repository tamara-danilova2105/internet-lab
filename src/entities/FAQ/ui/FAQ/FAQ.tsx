import { Text } from '@/shared/ui/Text/Text';
import styles from './FAQ.module.scss';
import { Accordion } from '../Accordion/Accordion';

export const FAQ = () => {
    return (
        <section className={styles.section}>
            <Text tag='h2'>Вопросы и ответы</Text>
            <Accordion />
        </section>
    );
};