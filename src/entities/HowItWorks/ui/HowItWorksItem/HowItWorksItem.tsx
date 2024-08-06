import { Text } from "@/shared/ui/Text/Text";
import { IHowItWorksItem } from "../../lib/data";
import styles from './HowItWorksItem.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";

export const HowItWorksItem = ({icon, title, text}: IHowItWorksItem) => {
    return (
        <Stack 
            className={styles.main} 
            direction='column'
            gap="8"
        >
            {icon}
            <Text className={styles.text} size="l" weight='bold'>{title}</Text>
            <Text className={styles.text} size='m' color='darkGrey'>{text}</Text>
        </Stack>
    );
};