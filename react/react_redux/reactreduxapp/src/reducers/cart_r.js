export default (state = 0, action) => {
    switch (action.type) {
        case "addtocart":
            return action.payload
        case "removefromcart":
                return action.payload
        default:
            return state
    }
}