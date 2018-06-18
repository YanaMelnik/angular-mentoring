export function getTimeString(time: number): string {
  const minute = 'min';
  const hour = 'h';
  const oneHour = 60;
  const minutes = time % oneHour;

  const hours = time > oneHour ? (time - minutes) / oneHour : '';

  return hours ? `${hours}${hour} ${minutes}${minute}` : `${minutes}${minute}`;
}

export function getDateString(date: Date): string {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleString('en-US', options);
}
