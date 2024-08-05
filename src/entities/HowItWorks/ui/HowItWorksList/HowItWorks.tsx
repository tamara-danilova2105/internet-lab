import { Text } from "@/shared/ui/Text/Text";
import { data } from "../../lib/data";
import { HowItWorksItem } from "../HowItWorksItem/HowItWorksItem";
import styles from './HowItWorks.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";

export const HowItWorks = () => {
    return (
        <section className={styles.section}>
            <Text tag='h2'>
                Как это работает
            </Text>
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