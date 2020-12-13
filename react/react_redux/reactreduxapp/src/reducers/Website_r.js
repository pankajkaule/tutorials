export default (state = "wwww.google.com", action) => {
    switch (action.type) {
        case "CHANGE_WEBSITE":
            return  action.payload
        default:
            return state
    }
}