const INITIAL_STATE = {
    name: "work of sketching"
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_NAME": 
            return {...state,
            name:action.payload}
        default:
            return state
    }
}