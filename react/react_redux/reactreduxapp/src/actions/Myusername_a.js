export const Myusernamea = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res2 = await data.json()
            dispatch({type:'CHANGE_USERNAME',payload:res2[1].username})
        } catch (e) {}
    };
};