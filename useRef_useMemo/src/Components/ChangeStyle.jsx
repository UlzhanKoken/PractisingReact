import { useRef } from "react";

export default function ChangeStyle() {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = "lightgreen";
    divRef.current.textContent = "Цвет изменён!";
  };

  return (
    <div>
        <h1>Task 5</h1>
      <div
        ref={divRef}
        style={{ padding: "10px", border: "1px solid black" }}
      > Нажми кнопку
      </div>
      <button onClick={handleClick}>Изменить стиль</button>
    </div>
  );
}
