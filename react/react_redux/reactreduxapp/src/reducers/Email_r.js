
export default (state = "pankajkaule@gmail.com", action) => {
    switch (action.type) {
        case "CHANGE_EMAIL":
            return action.payload
        default:
            return state
    }
}