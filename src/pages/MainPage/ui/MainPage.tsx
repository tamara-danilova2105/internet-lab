import { ThreeBlock } from "@/entities/ThreeBlock";
import styles from './MainPage.module.scss';
import { Hero } from "@/widgets/Hero";
import { HowItWorks } from "@/entities/HowItWorks";

const MainPage = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <HowItWorks />
            <ThreeBlock />
        </main>
    );
};

export default MainPage;
