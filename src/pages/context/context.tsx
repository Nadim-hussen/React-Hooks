import {createContext} from 'react'
import ComA from './ComA'
const FirstName = createContext<string>("");
const LastName = createContext<string>("");
function Context() {
  return (
    <>
        <FirstName.Provider value={"Nadim"} >
        <LastName.Provider value={"Hussen"} >
        <ComA />
        </LastName.Provider>
        </FirstName.Provider>
    </>
  )
}

export default Context;
export {FirstName,LastName}
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

// Now if you want to pass data to the child or the grandChild you can do it easily with the help of useContext hook