import { Text } from '@/shared/ui/Text/Text';
import styles from './FAQ.module.scss';
import { Accordion } from '../Accordion/Accordion';

export const FAQ = () => {
    return (
        <section
            id='faq'
            className={styles.section}
        >
            <Text className={styles.title} tag='h2'>
                Вопросы и ответы
            </Text>
            <Accordion />
        </section>
    );
};