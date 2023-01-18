import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function stopTimer() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    // window.clearInterval(intervalRef.current); // <- Possible if 'const intervalRef = useRef<number | undefined>(undefined);'
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  
    return () => {
      stopTimer();
    }
  }, [])
  
  return(
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button> 
    </div>
  );
}
