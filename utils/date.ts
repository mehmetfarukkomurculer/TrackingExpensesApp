export function getFormattedDate(date: Date) {
  //return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return date.toLocaleString("en-GB", options);
}

export function getDAteMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
