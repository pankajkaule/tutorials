export const Websitea = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res2 = await data.json()
            dispatch({type:'CHANGE_WEBSITE',payload:res2[7].website})
        } catch (e) {}
    };
};