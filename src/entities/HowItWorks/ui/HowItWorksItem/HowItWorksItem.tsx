import { Stack } from "../../../../shared/ui/Stack/Stack";
import { IHowItWorksItem } from "../../lib/data";
import styles from './HowItWorksItem.module.scss';

export const HowItWorksItem = ({icon, title, text}: IHowItWorksItem) => {
    return (
        <Stack 
            className={styles.main} 
            direction='column'
            gap="8"
        >
            {icon}
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
        </Stack>
    );
};