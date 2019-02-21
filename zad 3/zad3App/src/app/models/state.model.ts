export interface IState {
    checkedBoxes: {
        [key: string]: boolean
    };
}

export interface ITreeData {
    label: string;
    value: string;
    children: Array<ITreeData>;
}