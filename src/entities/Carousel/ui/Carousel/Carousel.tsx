import { Stack } from '@/shared/ui/Stack/Stack';
import { reviews } from '../../lib/data';
import { CarouselItem } from '../CarouselItem/CarouselItem';
import styles from './Carousel.module.scss';

export const Carousel = () => {
    return (
        <section className={styles.section}>
            <Stack className={styles.reviews} gap='16'>
                {reviews.map(el => 
                    <CarouselItem key={el.id} element={el} />
                )}
            </Stack>
        </section>
    );
};
