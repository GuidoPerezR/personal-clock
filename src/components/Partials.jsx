export const Partials = ({ partials }) => {
  if (partials.length === 0) return;

  return (
    <div className="mt-6">
      <header className="flex gap-6 [&_span]:text-gray-300">
        <span>Vuelta</span>
        <span>Tiempos parciales</span>
        <span>Tiempo total</span>
      </header>
      <div className="w-full mt-4 flex flex-col-reverse">
        {partials.map(({ partialTime, totalTime }, i) => (
          <article
            className="flex justify-around gap-12 text-purple-300 mt-2"
            key={totalTime}
          >
            <span>{(i + 1).toString().padStart(2, "0")}</span>
            <span>{partialTime}</span>
            <span>{totalTime}</span>
          </article>
        ))}
      </div>
    </div>
  );
};
