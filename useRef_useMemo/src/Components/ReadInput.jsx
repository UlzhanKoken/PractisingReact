import { useRef } from "react";

export default function ReadInputValue() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert("Текущее значение: " + inputRef.current.value);
  };

  return (
    <div>
        <h1>Task 3</h1>
      <input ref={inputRef} placeholder="Напиши что-то" />
      <button onClick={handleClick}>Показать значение</button>
    </div>
  );
}
