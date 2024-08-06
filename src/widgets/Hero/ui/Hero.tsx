import { Button } from '@/shared/ui/Button/Button';
import styles from './Hero.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import heroDesktop from '@/shared/assets/images/hero.png';
import heroTablet from '@/shared/assets/images/hero_tablet.png';
import { NavbarDesktop } from '@/feature/Navbar';
import { Stack } from '@/shared/ui/Stack/Stack';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <picture>
                <source media="(min-width: 1920px)"
                    srcSet={`${heroDesktop} 1x, ${heroDesktop} 2x`} type="image/webp"
                />
                <img className={styles.background_image} src={heroTablet}
                    srcSet={`${heroTablet} 2x`} alt="background image"
                />
            </picture>
            <div className={styles.header}>
                <NavbarDesktop />
            </div>
            <div className={styles.overlay} />
            <div className={styles.content_container}>
                <Stack
                    direction='column'
                    align='center'
                    className={styles.content}
                    gap='32'
                >
                    <Text tag='h1' color='white'>
                        Говорят, никогда не поздно сменить профессию
                    </Text>
                    <Text size='xl' color='white'>
                        Сделай крутое тестовое задание и у тебя получится
                    </Text>
                    <Button variant='secondary' className={styles.hero_btn}>
                        Проще простого!
                    </Button>
                </Stack>
            </div>
        </div>
    );
};
