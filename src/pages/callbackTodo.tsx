import React,{memo, useCallback} from 'react'
type Props = {
    todos: string[],
    addTodo ?:  any,
  };
const  CallbackTodo  = ({todos,addTodo}:Props)=> {
    console.log('todo trigger!');

  return (
    <>
        <h2>My Todo</h2>
        {
            todos.map((todo:string,index:number)=>{
                return <p key={index} >{todo+index}</p>
            })
        }
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(CallbackTodo);

// because of using useCallback you no longer have this issue of re-rendering. when Add todo is clicked then this will render.
// But this will not render with increment button.