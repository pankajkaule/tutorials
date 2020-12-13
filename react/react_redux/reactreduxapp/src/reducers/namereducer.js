const istate = {
  firstname: "this is pankaj kaule"
};
const namereducer = (mystate = istate, action) => {
  if (action.type==='CHANGE_NAME') {
      return{
          ...mystate,
          name:action.payload
      }
  }
  return mystate;
};
export default namereducer;
