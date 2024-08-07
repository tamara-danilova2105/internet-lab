import { Stack } from '@/shared/ui/Stack/Stack';
import { Reviews } from '../../lib/data';
import { Text } from '@/shared/ui/Text/Text';
import { userIcon } from '@/shared/assets/svg/userIcon';
import styles from './CarouselItem.module.scss';

interface CarouselItemProps {
    element: Reviews;
}

export const CarouselItem = (props: CarouselItemProps) => {
    const { element } = props;
    const { username, city, review, avatar } = element;

    return (
        <Stack
            className={styles.main}
            direction='column' gap='16'
        >
            <Stack gap='16'>
                {
                    avatar 
                        ? <img className={styles.avatar} src={avatar} alt={username} />
                        : userIcon()
                }
                <Stack direction='column' gap='8'>
                    <Text size='l' weight='bold'>{username}</Text>
                    <Text size='s' color='darkGrey'>{city}</Text>
                </Stack>
            </Stack>
            <Text className={styles.review} size='m'>{review}</Text>
        </Stack>
    );
};
