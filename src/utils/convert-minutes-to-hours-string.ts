// 1080 -> 18:00

export function convertMinutesToHoursString(minutesAmount: number) {
  const hour = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  const hourString = hour.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');

  return `${hourString}:${minutesString}`;
}