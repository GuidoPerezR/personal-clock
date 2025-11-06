import { Partials } from "./Partials";
import { useCronometer } from "../hooks/useCronometer";
import { useCronometerText } from "../hooks/useCronometerText";
import { useIntervalCounter } from "../hooks/useIntervalCounter";
import { usePartials } from "../hooks/usePartials";

export const Chronometer = () => {
  const { cronometerText, restartCronometer, setCronometerValue } =
    useCronometerText();
  const { isStarted, startCronometer, pauseCronometer } = useCronometer();
  const { counter, restartCounter } = useIntervalCounter({
    isStarted,
    setCronometerValue,
  });
  const { partials, restartPartials, createPartial } = usePartials({ counter });

  const handleStartButton = () => {
    startCronometer();
  };

  const handlePauseButton = () => {
    pauseCronometer();
  };

  const handleResetBtn = () => {
    restartCounter();
    restartCronometer();
    restartPartials();
  };

  const handlePartialBtn = () => {
    createPartial();
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
