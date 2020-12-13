export default (state = "default phone number", action) => {
    switch (action.type) {
        case "CHANGE_PHONE":
            return action.payload
        default:
            return state
    }
}