export function formatEducationPeriod(
  startYear: string,
  endYear?: string | null,
): string {
  if (!endYear) {
    return `${startYear} — Atual`;
  }

  if (startYear === endYear) {
    return startYear;
  }

  return `${startYear} — ${endYear}`;
}

