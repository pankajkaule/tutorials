
const myaction = () => {
    return async (dispatch) => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const res2 = await data.json()
      dispatch({type:'CHANGE_NAME',payload:res2[1].name})
    }
}

export default myaction;
