import type { Clock } from '@/class/Clock';
import { ClockPack } from '@/class/Clock';

export function getTimeWorking(startDate: string, endDate: string): number {
  const value = new Date(endDate).getTime() - new Date(startDate).getTime();
  const res = value / (1000 * 60 * 60); // Convert milliseconds to hours;
  return Math.round(res * 100) / 100;
}

export function getClocksDayNight(firstClock: string, secondClock: string) {
  function getMinutesFromMidnight(clock: Date) {
    return clock.getHours() * 60 + clock.getMinutes();
  }

  const startDate = new Date(firstClock);
  const endDate = new Date(secondClock);

  const startMinutes = getMinutesFromMidnight(startDate);
  const endMinutes = getMinutesFromMidnight(endDate);

  const dayStart = getMinutesFromMidnight(new Date('1970-01-01 05:00:00'));
  const nightStart = getMinutesFromMidnight(new Date('1970-01-01 22:00:00'));
  const nightEnd = getMinutesFromMidnight(new Date('1970-01-01 05:00:00'));

  let dayDuration = 0;
  let nightDuration = 0;

  if (startMinutes <= endMinutes) {
    if (endMinutes >= dayStart && startMinutes <= nightStart) {
      dayDuration = Math.min(endMinutes, nightStart) - Math.max(startMinutes, dayStart);
      nightDuration = Math.max(0, endMinutes - nightStart) + Math.max(0, nightEnd - startMinutes);
    } else {
      dayDuration = 0;
      nightDuration = 0;
    }
  } else {
    dayDuration = Math.max(0, nightStart - startMinutes) + Math.max(0, endMinutes - nightStart);
    nightDuration =
      Math.min(endMinutes, nightEnd) + (nightStart - Math.max(startMinutes, nightStart));
  }

  console.log(startDate.getHours());
  console.log(startDate.getMinutes());
  console.log(
    `dayDuration: ${dayDuration / 60} hours | nightDuration: ${nightDuration / 60} hours`
  );
  return new ClockPack(firstClock, secondClock, dayDuration / 60, nightDuration / 60);
}

export function setClockPacks(clocks: Clock[]) {
  let res = []; // as clockPack[];
  const length = clocks.length - (clocks.length % 2);

  for (let i = 0; i < length; i += 2) {
    const firstClock = clocks[i].time;
    const secondClock = clocks[i + 1].time;

    const firstClockState = clocks[i].status;
    const secondClockState = clocks[i + 1].status;

    if (new Date(firstClock).getTime() - new Date(secondClock).getTime() > 0) {
      if (firstClockState && !secondClockState) {
        res.push(getClocksDayNight(firstClock, secondClock));
      }
    }
  }

  return res;
}
