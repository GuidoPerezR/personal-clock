import { useState } from "react";

export const useCronometerVisibility = () => {
  const [isCronometer, setIsCronometer] = useState(false);

  const manageCronometer = () => {
    setIsCronometer(!isCronometer);
  };

  return { isCronometer, manageCronometer };
};
