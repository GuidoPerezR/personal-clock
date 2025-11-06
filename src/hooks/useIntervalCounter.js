import { useEffect } from "react";
import { useState } from "react";
import { setTime } from "../scripts/setTime";

export const useIntervalCounter = ({ isStarted, setCronometerValue }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!isStarted) return;
    const setMilisecondsInterval = setInterval(() => {
      setCounter((prev) => prev + 10);

      const value = setTime(counter);
      setCronometerValue({ value });
    }, 10);

    return () => clearInterval(setMilisecondsInterval);
  }, [isStarted, counter, setCronometerValue]);

  const restartCounter = () => {
    setCounter(0);
  };

  return { counter, restartCounter };
};
