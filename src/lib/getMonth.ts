import dayjs from "dayjs";

export function getMonth(month: number, year: number) {
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  const daysInMoth = dayjs(new Date(year, month, 1)).daysInMonth();

  const isThisSpaceEmpty = (
    row: number,
    spaceIndex: number,
    numberEmptyDays: number
  ) => row === 0 && spaceIndex < numberEmptyDays;

  const isMonthFilled = (currentDay: number) => currentDay > daysInMoth;

  let currentDay = 1;
  const daysMatrix = new Array(6).fill([]).map((_, index) => {
    return new Array(7).fill(index).map((row, index) => {
      if (isMonthFilled(currentDay)) return null;
      if (isThisSpaceEmpty(row, index, firstDayOfTheMonth)) return null;

      const day = currentDay;
      currentDay++;
      return dayjs(new Date(year, month, day));
    });
  });

  return daysMatrix;
}