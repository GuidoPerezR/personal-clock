export const getDate = ({ date }) => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const daytime = hours >= 12 ? "p.m." : "a.m.";
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  const newDate = {
    hours,
    minutes,
    seconds,
    daytime,
  };

  return newDate;
};
