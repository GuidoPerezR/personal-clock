import { useEffect } from "react";
import { useState } from "react";
import { setTime } from "../scripts/setTime";
import { Partials } from "./Partials";

export const Chronometer = () => {
  const [counter, setCounter] = useState(0);
  const [cronometerText, setCronometerText] = useState("00:00.00");
  const [isStarted, setIsStarted] = useState(false);
  const [partials, setPartials] = useState([]);

  useEffect(() => {
    if (!isStarted) return;

    const setMilisecondsInterval = setInterval(() => {
      setCounter((prev) => prev + 10);

      const text = setTime(counter);

      setCronometerText(text);
    }, 10);

    return () => clearInterval(setMilisecondsInterval);
  }, [isStarted, counter]);

  const handleStartButton = () => {
    setIsStarted(!isStarted);
  };

  const handlePauseButton = () => {
    setIsStarted(false);
  };

  const handleResetBtn = () => {
    setCounter(0);
    setCronometerText("00:00.00");
    setPartials([]);
  };

  const handlePartialBtn = () => {
    if (partials.length === 0) {
      const newPartial = {
        partialTime: cronometerText,
        totalTime: cronometerText,
        counter,
      };
      setPartials([newPartial]);
      return;
    }

    const actualPartial = counter;
    const prevPartial = partials[partials.length - 1]?.counter;

    const partialTime = setTime(actualPartial - prevPartial);

    const totalTime = setTime(counter);

    const newPartial = {
      partialTime,
      totalTime,
      counter,
    };
    setPartials([...partials, newPartial]);
  };

  const startButtonText =
    counter === 0
      ? "Iniciar"
      : isStarted && counter !== 0
      ? "Detener"
      : "Reanudar";

  const startOnClickEvent = isStarted ? handlePauseButton : handleStartButton;

  const startBgColor = isStarted
    ? "bg-red-500 text-purple-100"
    : "bg-purple-500 text-purple-100";

  const restartButtonText =
    counter === 0 ? "Parcial" : isStarted ? "Parcial" : "Restablecer";

  const restartOnClickEvent = isStarted ? handlePartialBtn : handleResetBtn;

  const restartClass =
    counter === 0
      ? "pointer-events-none cursor-not-allowed opacity-25"
      : "cursor-pointer";

  return (
    <section className="flex items-center flex-col">
      <h1 className="text-4xl text-purple-300 font-bold md:text-6xl ">
        {cronometerText}
      </h1>

      <Partials partials={partials} />

      <div className="mt-6 flex gap-6 justify-center">
        <button
          className={`font-semibold text-purple-100 bg-neutral-950 px-12 py-4 rounded-full ${restartClass}`}
          onClick={restartOnClickEvent}
        >
          {restartButtonText}
        </button>
        <button
          onClick={startOnClickEvent}
          className={`font-semibold px-12 py-4 rounded-full cursor-pointer ${startBgColor}`}
        >
          {startButtonText}
        </button>
      </div>
    </section>
  );
};
