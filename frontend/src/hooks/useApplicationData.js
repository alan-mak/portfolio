import { useState } from 'react';

function useApplicationData() {

  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const handleInput= event => {
    setState({
    ...state,
    [event.currentTarget.name]: event.currentTarget.value 
  })}

  return {
    handleInput
  };
}
  
export default useApplicationData;