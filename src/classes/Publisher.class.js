import { User } from "./UserHierarchy.class";

export class Publisher extends User {
  static entity = "publishers";

  static baseEntity = "users";

  verifyPost() {
    console.log("Verifying the post");
  }
  static fields() {
    return { ...super.fields() };
  }
}
