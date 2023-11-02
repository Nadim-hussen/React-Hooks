import React, { useEffect, useState,FC, useLayoutEffect } from 'react';
import { TaskInput } from '../types/effect'
import '../css/effect.css'
 const MyComponent:FC = () => {
  const [data, setData] = useState<TaskInput[]>([]);
//   const customers = [
//     { name: 'John Doe', age: 12 },
//     { name: 'Jane Doe', age: 14 },
// ];
  // useLayoutEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => setData(json));
  //     console.log('hello');
  // }, []); //** use layout and useEffect are same but difference is useLayout avoid flikering.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
      console.log('hello');
  }, []);
  function changePage(id:number){
    console.log(id);

  }

  if (!data) {
    return <p>Loading... </p>;
  }else{
    return (
      <>
         {/* <ul>
         {customers.map(item => (
            <li key={item.age}>{item.name}</li>
           ))}
        </ul> */}
         <ol type='1'>
         {data.map(item => (
            <li key={item.id}>
               {item.title}
              <button onClick={()=>{
                changePage(item.id)
              }}>show more</button><br />
              </li>
           ))}

        </ol>

      </>
    );

  }

}

export default MyComponent;