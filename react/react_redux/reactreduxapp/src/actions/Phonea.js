export const Phonea = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res2 = await data.json()
            dispatch({type:'CHANGE_PHONE',payload:res2[5].phone})
        } catch (e) {}
    };
};