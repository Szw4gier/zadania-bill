export interface IState {
    checkedBoxes: Array<IInputState>;
}

export interface IInputState {
    label: string;
    value: boolean;
}
