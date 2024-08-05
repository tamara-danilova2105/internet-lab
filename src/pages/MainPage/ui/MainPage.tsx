import { ThreeBlock } from "@/entities/ThreeBlock";
import { HowItWorks } from "../../../entities/HowItWorks";
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <HowItWorks />
            <ThreeBlock />
        </main>
    );
};

export default MainPage;
