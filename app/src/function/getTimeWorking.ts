import type { Clock } from '@/class/Clock';
import { ClockPack } from '@/class/Clock';

export function getTimeWorking(startDate: string, endDate: string): number {
  const value = new Date(endDate).getTime() - new Date(startDate).getTime();
  const res = value / (1000 * 60 * 60); // Convert milliseconds to hours;
  return Math.round(res * 100) / 100;
}

export function getClockOnSameDay(clocks: Clock[]) {}

export function setClockPacks(clocks: Clock[]) {
  let res = [] as ClockPack;
  const length = clocks.length - (clocks.length % 2);

  for (let i = 0; i < length; i += 2) {
    const firstClock = clocks[i].time;
    const secondClock = clocks[i + 1].time;

    const firstClockState = clocks[i].status;
    const secondClockState = clocks[i + 1].status;

    if (new Date(firstClockState).getTime() - new Date(secondClockState).getTime() > 0) {
      if (firstClockState && !secondClockState) {
        res.push(new ClockPack(firstClock, secondClock));
      }
    }
  }

  return res;
}
