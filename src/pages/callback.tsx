// useMemo vs useCallback :: when you are working with value use memo. But when you are working with function or child component use Callback

import React, { useCallback, useState } from 'react'
import CallbackTodo from './callbackTodo'

function Callback() {
    const [count,setCount] = useState(0)
    const [todos,setTodos] = useState<string[]>([])
    const increment =()=>{
        setCount(count+1)
    }
    const addTodo= useCallback(()=>{
        // const addTodo = ():void =>{
            setTodos((prev)=>[...prev, `new Enty`])
        // }
    },[todos])
  return (
    <>
    <CallbackTodo todos={todos} addTodo={addTodo} />
    <hr />
    <div>
        count : {count}
        <button onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default Callback

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// usememo return memorized value and usecallback return memorized function