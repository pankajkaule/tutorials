export default (state ="hii akshay" , action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return action.payload
        default:
            return state
    }
}   