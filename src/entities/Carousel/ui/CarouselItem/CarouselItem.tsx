import { Stack } from '@/shared/ui/Stack/Stack';
import { Reviews } from '../../lib/data';
import styles from './CarouselItem.module.scss';
import { Text } from '@/shared/ui/Text/Text';

interface CarouselItemProps {
    element: Reviews;
}

export const CarouselItem = (props: CarouselItemProps) => {
    const { element } = props;
    const { username, city, review } = element;

    return (
        <Stack
            className={styles.main}
            direction='column' gap='16'
        >
            <Text size='l' weight='bold'>{username}</Text>
            <Text size='s' color='darkGrey'>{city}</Text>
            <Text className={styles.review} size='m'>{review}</Text>
        </Stack>
    );
};