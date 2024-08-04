import { ReactNode } from "react";
import { doIcon, GetIcon, LearnIcon, ReadIcon } from "../../../shared/assets/svg/howItWorksIcons";

export interface IHowItWorksItem {
    icon: ReactNode;
    title: string;
    text: string;
}

export const data: IHowItWorksItem[] = [
    {
        icon: ReadIcon(),
        title: 'Прочитай задание внимательно',
        text: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
        icon: LearnIcon(),
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле',
    },
    {
        icon: doIcon(),
        title: 'Сделай хорошо',
        text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    },
    {
        icon: GetIcon(),
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    },
];
