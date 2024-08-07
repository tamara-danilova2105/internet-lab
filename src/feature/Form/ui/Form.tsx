import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import styles from './Form.module.scss';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import { Form as IForm, getDataForm, setDataForm } from "../model/slice";

export const Form = () => {

    const dataForm = useAppSelector(getDataForm);
    const dispatch = useAppDispatch();
    const [isError, setIsError] = useState({
        username: false,
        phone: false,
    })

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setDataForm({ name: name as keyof IForm, value }))
    }, [dispatch]);

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = Object.values(dataForm).every(value => value !== '');       
    }

    return (
        <section
            id="form"
            className={styles.section}
        >
            <Text className={styles.title} tag='h2'>Отправь форму</Text>
            <form onSubmit={submitForm}>
                <Stack
                    className={styles.input_container}
                    max justify='between'
                >
                    <Input
                        className={styles.input}
                        label='Имя'
                        name="username"
                        onChange={handleChange}
                        helperText='обязательное поле'
                        isError={isError.username}
                    />
                    <Input
                        className={styles.input}
                        label='Телефон'
                        name="phone"
                        onChange={handleChange}
                        helperText='обязательное поле'
                        isError={isError.phone}
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
            </form>
        </section>
    );
};
