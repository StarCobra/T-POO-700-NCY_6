import {User} from "@/class/User";
export async function getAllUsers($event?: Event){
  if ($event != undefined){
    $event.preventDefault();
  }
  try {

    const fetchUsers = await fetch("http://localhost:4000/api/users")
        .then(response => response.json())
        .then(data => data.data);

    const promiseUsers = await fetchUsers.map(async (user:any) => {
      return new User(
          user.id,
          user.email,
          user.username
      )
    })

    const users: User[] = await Promise.all(promiseUsers);

    return users;
  }
  catch (e){
    console.log(e);
  }
}

export async function getUser(user:User, $event?: Event){
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    const fetchUser = await fetch(`http://localhost:4000/api/users?email=${user.email}&username=${user.username}`)
        .then(response => response.json())
        .then(data => data.data);

    const resUser:User = new User(
        fetchUser.id,
        fetchUser.email,
        fetchUser.username
    );

    return resUser;
  }
  catch (e) {
    console.log(e);
  }
}

export async function createUser(user:User, $event?: Event ) {
  if ($event != undefined){
    $event.preventDefault();
  }
  console.log(`createUser: ${user.username} - ${user.email}`);
  try {
    await fetch('http://localhost:4000/api/users', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        "user": {
          username: user.username,
          email: user.email
        }
      })
    })
  }
  catch (e){
    console.log(e)
  }
}

export async function updateUser(user:User, $event?: Event){
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    await fetch(`http://localhost:4000/api/users/${user.id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        "user": {
          username: user.username,
          email: user.email
        }
      })
    })
  }
  catch (e){
    console.log(e);
  }
}

export async function removeUser(user:User, $event?: Event){
  if ($event != undefined){
    $event.preventDefault();
  }
  try {
    await fetch(`http://localhost:4000/api/users/${user.id}`, {
      method: 'DELETE'
    });
  }
  catch (e){
    console.log(e);
  }
}
