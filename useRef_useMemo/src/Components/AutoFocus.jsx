import React, { useEffect, useRef } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  

 

  useEffect(() => {
   
      inputRef.current.focus();
 
  }, []);


  return (
    <div>
      <h1 id="head1">Task 1 / Autofocus</h1>

      <input ref={inputRef} placeholder="Я получаю фокус автоматически" />

    </div>
  );
}

export default AutoFocusInput;
