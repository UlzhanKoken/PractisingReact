import { useMemo } from "react";

export default function HeavyCalculation() {
  const bigNumber = 500000;
  const expensiveResult = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < bigNumber; i++) {
      sum += i;
    }
    return sum;
  }, []); 
  return (
    <>
        <h1>Use Memo Task</h1>
        <div>Сумма от 0 до {bigNumber}: {expensiveResult}</div>
    </>
  )
}
