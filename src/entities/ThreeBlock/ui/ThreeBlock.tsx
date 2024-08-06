import { Stack } from "@/shared/ui/Stack/Stack";
import background from "@/shared/assets/images/back.png";
import threeBlock from "@/shared/assets/images/three_block.png";
import styles from './ThreeBlock.module.scss';
import { Text } from "@/shared/ui/Text/Text";

export const ThreeBlock = () => {
    return (
        <section className={styles.section}>
            <Stack 
                direction='column' 
                gap='16' 
                justify='center'
                className={styles.text_block}
            >
                <Text tag="h3">
                    Круто, ты дошел до третьего блока
                </Text>
                <Text className={styles.text} color='darkGrey' size='l'>
                    63% опрошенных пользовались кредитами из-за того, что не могли покрыть
                    непредвиденные расходы свыше 15 000 Р.
                </Text>
                <Text className={styles.text}  color='darkGrey' size='l'>
                    Доступ к заработанным деньгам помогает отказаться от кредитов и
                    экономить деньги на процентах и штрафах.
                </Text>
            </Stack>
            <div className={styles.image_block}>
                <img src={background} alt="three block" />
                <img src={threeBlock} alt="three block" />
            </div>
        </section>
    );
};
