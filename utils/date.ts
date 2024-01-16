export function getFormattedDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return date.toLocaleString("en-CA", options);
}

export function getDAteMinusDays(dateString: string, days: number) {
  const date = new Date(dateString);

  // Subtract the specified number of days
  date.setDate(date.getDate() - days);

  return date;
}
