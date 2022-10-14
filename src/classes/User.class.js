import { Model } from "@vuex-orm/core";
import List from "./List.class";
import Profile from "./Profile.class";
export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      name: this.attr(""),
      email: this.attr(""),
      list_ids: this.attr([]),
      // relationships
      profile: this.hasOne(Profile, "user_id"),
      // A user has many List
      lists: this.hasManyBy(List, "list_ids"),
    };
  }
}
