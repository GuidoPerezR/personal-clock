import { useState } from "react";

export const useCronometer = () => {
  const [isStarted, setIsStarted] = useState(false);

  const startCronometer = () => {
    setIsStarted(true);
  };

  const pauseCronometer = () => {
    setIsStarted(false);
  };

  return { isStarted, startCronometer, pauseCronometer };
};
