import { Button } from '../../../shared/ui/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <img src={''} alt="background image" className={styles.background_image} />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Говорят, никогда не поздно сменить профессию</h1>
                <p>Сделай крутое тестовое задание и у тебя получится</p>
                <Button className={styles.hero_btn}>
                    Проще простого!
                </Button>
            </div>
        </div>
    );
};