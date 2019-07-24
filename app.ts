import { UsersService } from "./services/users.service";
import { User } from "./interfaces/user";
import { UsersComponent } from "./components/users.component";
import { AddUserComponent } from "./components/add-user.component";

const usersService: UsersService = new UsersService();
const usersComponent = new UsersComponent();
const addUserComponent: AddUserComponent = new AddUserComponent();

// store users
let users: User[] = [];
const usersTarget: HTMLTableElement = document.querySelector("table tbody");

function renderUsers() {
  usersComponent.render(users, usersTarget);
}

function renderForm() {
  addUserComponent.render(
    document.getElementById("addUsers") as HTMLDivElement,
    addUserToList
  );
}

function addUserToList(user: User) {
  users.push(user);
  renderUsers();
}

async function init() {
  users = await usersService.getUsers();
  console.log(users);
  renderUsers();
  renderForm();
}

init();
