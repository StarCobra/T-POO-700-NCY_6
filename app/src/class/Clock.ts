export class Clock {
  id: string;
  userId: string;
  status: boolean;
  time: string;

  constructor(id?: string, userId?: string, status?: boolean, time?: string) {
    this.id = id ?? '';
    this.userId = userId ?? '';
    this.status = status ?? false;
    this.time = time ?? '';
  }
}

export class ClockPack {
  start: string;
  end: string;
  day: number;
  night: number;
  constructor(start: string, end: string, day: number, night: number) {
    this.start = start;
    this.end = end;
    this.day = day;
    this.night = night;
  }
}
