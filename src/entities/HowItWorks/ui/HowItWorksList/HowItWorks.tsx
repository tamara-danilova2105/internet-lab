import { Stack } from "../../../../shared/ui/Stack/Stack";
import { data } from "../../lib/data";
import { HowItWorksItem } from "../HowItWorksItem/HowItWorksItem";
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Как это работает</h2>
            <Stack justify='between' max>
                {data.map((el, index) => 
                    <HowItWorksItem 
                        key={index} 
                        icon={el.icon} 
                        title={el.title}
                        text={el.text}
                    />
                )}
            </Stack>
        </section>
    );
};