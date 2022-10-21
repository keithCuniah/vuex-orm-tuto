import { User } from "./UserHierarchy.class";

export class Admin extends User {
  static entity = "admins";

  static baseEntity = "users";

  deleteAccount() {
    console.log("deleting the account");
  }
  static fields() {
    return {
      ...super.fields(),
    };
  }
}
