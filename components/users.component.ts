import { User } from "../interfaces/user";

export class UsersComponent {
  public renderUser(user: User): string {
    const { id, firstName, lastName, email } = user;
    return `
         <tr>
            <td>
                ${id}
            </td>
            <td>
                ${firstName}
            </td>
            <td>
                ${lastName}
            </td>
            <td>
                ${email}
            </td>
         </tr>
        `;
  }

  public render(users: User[], target: HTMLTableElement) {
    target.innerHTML = users.map(user => this.renderUser(user)).join("");
  }
}
