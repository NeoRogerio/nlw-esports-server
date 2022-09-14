// 18:00 -> ["18", "00"] -> [18, 00]

export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number);
  const minuteAmount = hour * 60 + minutes;

  return minuteAmount;
}