import { useEffect } from "react";
import { useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState("00:00:00 a.m");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");

      const daytime = hours >= 12 ? "p.m." : "a.m.";
      if (hours > 12) hours -= 12;
      if (hours === 0) hours = 12;

      const timeText = `${hours}:${minutes}:${seconds} ${daytime}`;
      setTime(timeText);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-5xl flex justify-center items-center flex-col">
      <h1 className="text-4xl text-purple-300 font-bold md:text-6xl">{time}</h1>
      <small className="text-lg mt-4 text-gray-500 md:text-xl">
        Hora estándar central
      </small>
    </section>
  );
};
