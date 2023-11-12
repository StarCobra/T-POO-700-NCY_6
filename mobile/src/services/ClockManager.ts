import { Clock } from '@/class/Clock';

export async function getClocks(clock: Clock, $event?: Event) {
  if ($event !== undefined) {
    $event.preventDefault();
  }
  try {
    const fetchClocks = await fetch(`http://localhost:4000/api/clocks/${clock.userId}`)
      .then((response) => response.json())
      .then((data) => data.data);

    const promiseClock = await fetchClocks.map(async (clock: any) => {
      return new Clock(clock.id, clock.userId, clock.status, clock.time);
    });

    const clocks: Clock[] = await Promise.all(promiseClock);

    return clocks;
  } catch (e) {
    console.log(e);
  }
}

export async function postClock(clock: Clock, $event?: Event) {
  if ($event !== undefined) {
    $event.preventDefault();
  }

  try {
    await fetch(`http://localhost:4000/api/clocks/${clock.userId}`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        clock: {
          time: clock.time,
          status: clock.status,
          user_id: clock.userId
        }
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (e) {
    console.error(e);
  }
}
