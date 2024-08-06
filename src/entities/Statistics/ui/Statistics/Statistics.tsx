import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './Statistics.module.scss';
import { IStatistics, statistics } from '../../lib/data';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const Statistics = () => {
    return (
        <section className={styles.section}>
            <Stack
                className={styles.contant}
                max gap='32'
                justify='between'
            >
                {statistics.map((el: IStatistics) =>
                    <StatisticsItem
                        key={el.id}
                        element={el}
                    />
                )}
            </Stack>
        </section>
    )
}