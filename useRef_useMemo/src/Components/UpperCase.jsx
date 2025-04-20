import { useMemo } from "react";

export default function UpperCaseText({ text }) {
  const upperText = useMemo(() => {
    console.log("Переводим в верхний регистр...");
    return text.toUpperCase();
  }, [text]);

  return
  (
    <>
        <h1>Use Memo task </h1>
         <div>{upperText}</div>
    </>
  )
}


