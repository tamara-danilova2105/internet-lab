declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const className: IClassNames;
    export default className;
}

declare module '*.png' {
    const value: string;
    export default value;
}