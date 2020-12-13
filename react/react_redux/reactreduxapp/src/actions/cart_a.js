export const changecart = () => {
    return async dispatch => {
        try {
       
        dispatch({type:'addtocart',payload:1})
        dispatch({type:'removefromcart',payload:-1})
        } catch (e) {}
    };
};