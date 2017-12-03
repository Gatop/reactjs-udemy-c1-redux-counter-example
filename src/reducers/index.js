export default (state = 0, action) =>{
    console.log(state, action, "Desde el reducer");
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        default:
        return state;
    }
};
