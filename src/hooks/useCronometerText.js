import { useState } from "react";

export const useCronometerText = () => {
  const [cronometerText, setCronometerText] = useState("00:00.00");

  const setCronometerValue = ({ value }) => {
    setCronometerText(value);
  };

  const restartCronometer = () => {
    setCronometerText("00:00.00");
  };

  return { cronometerText, restartCronometer, setCronometerValue };
};
