import { Model } from "@vuex-orm/core";
import Profile from "./Profile.class";
export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      name: this.attr(""),
      email: this.attr(""),
      // relationships
      profile: this.hasOne(Profile, "user_id"),
    };
  }
}
