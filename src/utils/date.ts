export const calculateYearsDifference = (
  startDateInput: string | Date,
  endDateInput: string | Date = new Date(),
): number => {
  const startDate =
    typeof startDateInput === 'string'
      ? new Date(startDateInput)
      : startDateInput;
  const endDate =
    typeof endDateInput === 'string' ? new Date(endDateInput) : endDateInput;

  let years = endDate.getFullYear() - startDate.getFullYear();
  const monthDifference = endDate.getMonth() - startDate.getMonth();

  if (monthDifference < 0) {
    years--;
    return years;
  }

  if (monthDifference === 0) {
    if (endDate.getDate() < startDate.getDate()) {
      years--;
    }
  }

  return years;
};
