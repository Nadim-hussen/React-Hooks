import { useRef,FC  } from "react";
import ReactDOM from "react-dom/client";

const Ref:FC = () => {
  const inputElement = useRef<HTMLInputElement>();

  const focusInput = () => {
    if (inputElement.current) {
        inputElement.current.focus();
      }

  };

  return (
    <>
      {/* <input type="text" ref:={inputElement} /> */}
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default Ref;