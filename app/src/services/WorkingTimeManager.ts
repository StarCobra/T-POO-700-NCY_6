import {User} from "@/class/User";
import {WorkingTime} from "@/class/WorkingTime";

export async function getWorkingTimes(user:User,$event?: Event) {
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    const fetchWorkingTime = await fetch(`http://localhost:4000/api/workingtimes/${user.id}`)
        .then(response => response.json())
        .then(data => data.data)

    const promiseWorkingTime = await fetchWorkingTime.map(async (workingTime:any) => {
      return new WorkingTime(
          workingTime.id,
          workingTime.userId,
          workingTime.start,
          workingTime.end,
      )
    })

    const workingTimes: WorkingTime[] = await Promise.all(promiseWorkingTime);

    return workingTimes;
  }
  catch (e){
    console.log(e);
  }
}
export async function createWorkingTime(workingTime:WorkingTime, $event?: Event) {
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    await fetch(`http://localhost:4000/api/workingtimes/${workingTime.userId}`,{
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        "workingtime": {
          start: workingTime.start,
          end: workingTime.end,
          user_id: workingTime.userId
        }
      })
    })
        .then(response => response.json())
        .then(data => console.log(data))
  }
  catch (e){
    console.log(e);
  }
}

export async function updateWorkingTime(workingTime:WorkingTime,$event?: Event){
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    await fetch(`http://localhost:4000/api/workingtimes/${workingTime.id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        "workingtime": {
          start: workingTime.start,
          end: workingTime.end,
          user_id: workingTime.userId,
        }
      })
    })
  }
  catch (e){
    console.log(e);
  }
}

export async function removeWorkingTime(workingTime:WorkingTime, $event?: Event) {
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    await fetch(`http://localhost:4000/api/workingtimes/${workingTime.id}`, {
      method: 'DELETE',
    })
  }
  catch (e){
    console.log(e);
  }
}
