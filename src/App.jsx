import { useState } from "react";
import { Clock } from "./components/Clock";
import { Chronometer } from "./components/Chronometer";

function App() {
  const [isCronometer, setIsCronometer] = useState(false);

  const handleButtonClick = () => {
    if (isCronometer) {
      setIsCronometer(false);
    }
    setIsCronometer(!isCronometer);
  };

  const textButton = isCronometer ? "Volver a Reloj" : "Poner cronómetro";

  return (
    <>
      <main className="min-h-dvh w-full bg-stone-900 flex items-center px-6 py-12 justify-center flex-col">
        {isCronometer ? <Chronometer /> : <Clock />}

        <button
          className="font-semibold mt-24 text-purple-500 bg-purple-100 px-5 py-4 rounded-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {textButton}
        </button>
      </main>
    </>
  );
}

export default App;
