import { ThreeBlock } from "@/entities/ThreeBlock";
import styles from './MainPage.module.scss';
import { Hero } from "@/widgets/Hero";
import { HowItWorks } from "@/entities/HowItWorks";
import { FAQ } from "@/entities/FAQ";
import { Statistics } from "@/entities/Statistics";
import { Form } from "@/feature/Form";

const MainPage = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <HowItWorks />
            <ThreeBlock />
            <FAQ />
            <Statistics />
            <Form />
        </main>
    );
};

export default MainPage;
