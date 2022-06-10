import { useEffect, useState } from "react";

const Timer = () => {
  const [countdown, setCountDown] = useState(180);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(pre => pre - 1)
      console.log(countdown)
    }, 1000);
  return ()=>{clearInterval(timerId)}
  }, []);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
};
export default Timer;
