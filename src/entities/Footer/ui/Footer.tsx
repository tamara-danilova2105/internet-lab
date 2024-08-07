import { Text } from "@/shared/ui/Text/Text";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Text size="xl">
                © 2021 Лаборатория интернет
            </Text>
        </footer>
    );
};
