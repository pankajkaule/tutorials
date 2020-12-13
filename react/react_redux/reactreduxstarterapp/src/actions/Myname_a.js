export const Myname_a = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res2 = await data.json()
            dispatch({type:'CHANGE_NAME',payload:res2[2].name})
    } catch (e) {}
    };
};
