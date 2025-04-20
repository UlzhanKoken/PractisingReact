import { useRef } from "react";

export default function TriggerHiddenButton() {
  const hiddenBtnRef = useRef(null);

  const handleClick = () => {
    hiddenBtnRef.current.click();
  };

  return (
    <div>
        <h1>Task 4</h1>
      <button onClick={handleClick}>Нажать скрытую кнопку</button>
      <button
        ref={hiddenBtnRef}
        style={{ display: "none" }}
        onClick={() => alert("Скрытая кнопка сработала!")}
      >
        Скрытая
      </button>
    </div>
  );
}
