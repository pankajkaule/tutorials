export const Emaila = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res2 = await data.json()
            dispatch({type:'CHANGE_EMAIL',payload:res2[2].email})
        } catch (e) {}
    };
};