import { useRef,FC,useState } from "react";


const Ref:FC = () => {
  const [text, setText] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus();
  //   }
  // }, []);
  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }

  };
  const saveText = () =>{
    if(ref.current){
      setText(ref.current.value);
    }
  }
  const clearText = () =>{
    if(ref.current){
      setText('');
      ref.current.value = ''
    }
  }

  return (
    <>
      <input ref={ref} />;
      <div>{text}</div>
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={saveText}>Text</button>
      <button onClick={clearText}>Clear</button>
    </>
  );
}

export default Ref;