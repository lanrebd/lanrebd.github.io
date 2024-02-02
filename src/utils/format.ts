export function getYears(startDate: string, endDate: string | null) {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
  const years = `${startYear} - ${endYear}`;
  return years;
}
