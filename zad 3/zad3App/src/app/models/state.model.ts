export interface IState {
    checkedBoxes: {
        [key: string]: boolean
    };
    searchQuery: string[];
}
