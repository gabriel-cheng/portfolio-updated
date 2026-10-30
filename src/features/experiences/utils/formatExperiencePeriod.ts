export function formatExperiencePeriod(
  startDate: string,
  endDate: string | null,
  current: boolean,
): string {
  function formatDate(value: string): string {
    const [year, month] = value.split("-").map(Number);

    const date = new Date(year, month - 1, 1);

    return new Intl.DateTimeFormat("pt-BR", {
      month: "short",
      year: "numeric",
    })
      .format(date)
      .replace(".", "");
  }

  const start = formatDate(startDate);
  const end = current || !endDate ? "Atual" : formatDate(endDate);

  return `${start} — ${end}`;
}
