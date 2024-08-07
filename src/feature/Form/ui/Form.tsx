import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import styles from './Form.module.scss';

export const Form = () => {
    return (
        <section
            id="form"
            className={styles.section}
        >
            <Text className={styles.title} tag='h2'>Отправь форму</Text>
            <Stack
                className={styles.input_container}
                max justify='between'
            >
                <Input
                    className={styles.input}
                    label='Имя'
                />
                <Input
                    className={styles.input}
                    label='Телефон'
                />
            </Stack>
            <Stack
                className={styles.submit_container}
                max
                justify='between'
                align='center'
            >
                <Stack className={styles.confirm} gap="8" align='center'>
                    <input className={styles.checkbox} type='checkbox' />
                    <span>Согласен, отказываюсь</span>
                </Stack>
                <Button className={styles.btn}>
                    Отправить
                </Button>
            </Stack>
        </section>
    );
};
