import { Settings } from "./settings.service";
import { User } from "../interfaces/user";

export class UsersService {
  public getUsers(): Promise<User[]> {
    const url = `${Settings.baseURL}/users`;
    return fetch(url).then(users => users.json());
  }

  public addUser(user: User): Promise<User> {
    const url = `${Settings.baseURL}/users`;
    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }
}
