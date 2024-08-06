import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import styles from './Form.module.scss';

export const Form = () => {
    return (
        <section className={styles.section}>
            <Text tag='h2'>Отправь форму</Text>
            <Stack max justify='between'>
                <Input
                    className={styles.input}
                    label='Имя'
                />
                <Input
                    className={styles.input}
                    label='Телефон'
                />
            </Stack>
            <Stack max justify='between' align='center'>
                <Stack className={styles.confirm} gap="8">
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
