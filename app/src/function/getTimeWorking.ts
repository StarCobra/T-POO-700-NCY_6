import type { Clock } from '@/class/Clock';
import { ClockPack } from '@/class/Clock';
import dayjs from "dayjs";

export function getClocksDayNight(firstClock: string, secondClock: string) {
  const startDate = new Date(firstClock).getTime();
  const endDate = new Date(secondClock).getTime();
  const dayHour = new Date(`${dayjs(startDate).format("YYYY-MM-DD")} 05:00:00`).getTime();
  const nightHour = new Date(`${dayjs(startDate).format("YYYY-MM-DD")} 22:00:00`).getTime();

  let dayMinutes = 0;
  let nightMinutes = 0;

  if (new Date(firstClock).getTime() <= new Date(secondClock).getTime()) {
    if (startDate >= dayHour && endDate <= nightHour) {
      // Les deux dates sont avant 22:00:00
      dayMinutes = (endDate - startDate) / 60000;
    } else if (startDate >= nightHour && endDate <= dayHour + 24*60*60*1000) {
      // Les deux dates sont après 22:00:00
      nightMinutes = (endDate - startDate) / 60000;
    } else {
      // Les dates chevauchent à la fois la journée et la nuit
      dayMinutes = (nightHour - startDate) / 60000;
      nightMinutes = (endDate - nightHour) / 60000;
    }
  }

  return new ClockPack(firstClock, secondClock, dayMinutes ?? 0, nightMinutes ?? 0);
}

export function setClockPacks(clocks: Clock[]) {
  let res = [] as ClockPack[];
  const length = clocks.length - (clocks.length % 2);
  for (let i = 0; i < length; i += 2) {
    const firstClock = clocks[i].time;
    const secondClock = clocks[i + 1].time;

    const firstClockState = clocks[i].status;
    const secondClockState = clocks[i + 1].status;

    if ((new Date(secondClock).getTime() - new Date(firstClock).getTime() > 0) && (firstClockState && !secondClockState)) {
      res.push(getClocksDayNight(firstClock, secondClock));
    }
  }

  return res;
}
