import { useState } from "react";
import { setTime } from "../scripts/setTime";

export const usePartials = ({ counter }) => {
  const [partials, setPartials] = useState([]);

  const createPartial = () => {
    const totalTime = setTime(counter);

    if (partials.length === 0) {
      const newPartial = {
        partialTime: totalTime,
        totalTime: totalTime,
        counter,
      };
      setPartials([newPartial]);
      return;
    }

    const actualPartial = counter;
    const prevPartial = partials[partials.length - 1]?.counter;

    const partialTime = setTime(actualPartial - prevPartial);

    const newPartial = {
      partialTime,
      totalTime,
      counter,
    };
    setPartials([...partials, newPartial]);
  };

  const restartPartials = () => {
    setPartials([]);
  };

  return { partials, restartPartials, createPartial };
};
