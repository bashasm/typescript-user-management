import { User } from "../interfaces/user";
import { UsersService } from "../services/users.service";

export class AddUserComponent {
  usersService: UsersService = new UsersService();

  private template = `
    <div class="jumbotron">
    <h2>Add User</h2>
    <form>
      <div class="form-group">
        <label for="firstNameInput">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstNameInput"
          placeholder="Enter First Name"
        />
      </div>
      <div class="form-group">
        <label for="lastNameInput">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastNameInput"
          placeholder="Enter Last Name"
        />
      </div>
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input
          type="text"
          class="form-control"
          id="emailInput"
          placeholder="Enter Email"
        />
      </div>
      <button class="btn btn-primary">Add</button>
    </form>
  </div>
    `;

  addUserToList: any;

  public render(target: HTMLDivElement, addUserToList: any) {
    this.addUserToList = addUserToList;
    target.innerHTML = this.template;
    target.addEventListener("submit", this.onSubmit);
  }

  public formData(): User {
    const firstName = (document.querySelector(
      "#firstNameInput"
    ) as HTMLInputElement).value;
    const lastName = (document.querySelector(
      "#lastNameInput"
    ) as HTMLInputElement).value;
    const email = (document.querySelector("#emailInput") as HTMLInputElement)
      .value;
    const id = new Date().getTime();
    return {
      id,
      firstName,
      lastName,
      email
    };
  }

  public onSubmit = (e: Event) => {
    e.preventDefault();
    const user: User = this.formData();
    console.log(user);
    this.addUser(user);
  };

  public async addUser(user: User) {
    const newUser: User = await this.usersService.addUser(user);
    console.log(newUser);
    this.resetForm();
    // add at the app level
    this.addUserToList(user);
  }

  public resetForm(): void {
    (document.querySelector("#firstNameInput") as HTMLInputElement).value = "";
    (document.querySelector("#lastNameInput") as HTMLInputElement).value = "";
    (document.querySelector("#emailInput") as HTMLInputElement).value = "";
  }
}
