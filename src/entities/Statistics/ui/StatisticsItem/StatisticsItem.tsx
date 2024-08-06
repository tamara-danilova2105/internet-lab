import { Text } from "@/shared/ui/Text/Text";
import { IStatistics } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './StatisticsItem.module.scss';

interface StatisticsItemProps {
    element: IStatistics
}

export const StatisticsItem = (props: StatisticsItemProps) => {
    const { element } = props;
    const { title, text } = element;

    return (
        <Stack
            className={styles.main}
            gap='16' direction='column'
        >
            <Text size="xl" weight='bold'>
                {title}
            </Text>
            <Text className={styles.text} size="l">
                {text}
            </Text>
        </Stack>
    );
};
