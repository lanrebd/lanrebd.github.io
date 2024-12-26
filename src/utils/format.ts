export function getYears(startDate: string, endDate: string | null) {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
  const years = `${startYear} - ${endYear}`;
  return years;
}

export function getDateInMMYYYY(date: string | null) {
  if (!date) return "Present";
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("es-MX", {
    month: "2-digit",
    year: "numeric",
    timeZone: "GMT",
  }).format(dateObj);
}

export function getStartAndEndDate(startDate: string, endDate: string | null) {
  const startDateInMMYYYY = getDateInMMYYYY(startDate);
  const endDateInMMYYYY = getDateInMMYYYY(endDate);
  return `${startDateInMMYYYY} - ${endDateInMMYYYY}`;
}
