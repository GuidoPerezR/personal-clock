export const setTime = (counter) => {
  const minutes = Math.floor(counter / 60000);
  const seconds = Math.floor((counter % 60000) / 1000);
  const miliseconds = (counter % 1000) / 10;

  const text = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${miliseconds.toString().padStart(2, "0")}`;
  return text;
};
