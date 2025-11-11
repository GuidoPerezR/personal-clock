import { useEffect } from "react";
import { useState } from "react";
import { getDate } from "../scripts/getDate";

export const useClockTime = () => {
  const [time, setTime] = useState("00:00:00 a.m");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const { hours, minutes, seconds, daytime } = getDate({ date });
      const timeText = `${hours}:${minutes}:${seconds} ${daytime}`;
      setTime(timeText);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time };
};
