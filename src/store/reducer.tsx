import initData from "./data/initData.json";

const reducer = (state: any = initData, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload.data];
        default:
            return state
    }
}

export default reducer;