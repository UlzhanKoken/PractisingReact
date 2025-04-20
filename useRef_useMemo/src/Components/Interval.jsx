import { useState, useRef, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return(
    <>
        <h1>Task 2</h1>
         <p>Секунд прошло: {seconds}</p>
    </>
  )
}
