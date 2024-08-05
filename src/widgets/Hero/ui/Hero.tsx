import { Button } from '@/shared/ui/Button/Button';
import styles from './Hero.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import heroImage from '@/shared/assets/images/hero.png'
import { NavbarDesktop } from '@/feature/Navbar';
import { Stack } from '@/shared/ui/Stack/Stack';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <img 
                src={heroImage} 
                alt="background image" 
                className={styles.background_image} 
            />
            <div className={styles.overlay} />
            <div className={styles.header}>
                <NavbarDesktop />
            </div>
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
    );
};
