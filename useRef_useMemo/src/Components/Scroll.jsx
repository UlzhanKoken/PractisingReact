import { useRef } from "react";

export default function ScrollToRef() {
  const bottomRef = useRef(null);

  const handleClick = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <h1>Task 6</h1>  
    <div style={{ height: "200px", overflowY: "scroll", border: "1px solid gray" }}>
      <div style={{ height: "600px" }}>
        <button onClick={handleClick}>Скролл вниз</button>
        <div ref={bottomRef} style={{ marginTop: "500px", background: "#eee" }}>
          ⬇ Я внизу!
        </div>
      </div>
    </div>
    </>
  );
}
