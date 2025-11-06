import { useClockTime } from "../hooks/useClockTime";

export const Clock = () => {
  const { time } = useClockTime();

  return (
    <section className="w-full max-w-5xl flex justify-center items-center flex-col">
      <h1 className="text-4xl text-purple-300 font-bold md:text-6xl">{time}</h1>
      <small className="text-lg mt-4 text-gray-500 md:text-xl">
        Hora estándar central
      </small>
    </section>
  );
};
