import { Stack } from "@/shared/ui/Stack/Stack";
import background from "../../../shared/assets/images/back.png";
import threeBlock from "../../../shared/assets/images/three_block.png";
import styles from './ThreeBlock.module.scss';

export const ThreeBlock = () => {
    return (
        <section className={styles.section}>
            <Stack 
                direction='column' 
                gap='16' 
                justify='center'
                className={styles.text_block}
            >
                <h2>Круто, ты дошел до третьего блока</h2>
                <p>
                    63% опрошенных пользовались кредитами из-за того, что не могли покрыть
                    непредвиденные расходы свыше 15 000 Р.
                </p>
                <p>
                    Доступ к заработанным деньгам помогает отказаться от кредитов и
                    экономить деньги на процентах и штрафах.
                </p>
            </Stack>
            <div className={styles.image_block}>
                <img src={background} alt="three block" />
                <img src={threeBlock} alt="three block" />
            </div>
        </section>
    );
};
