import { Model } from "@vuex-orm/core";
import Item from "./Item.class";
import List from "./List.class";
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
      // A user has many List
      lists: this.hasMany(List, "user_id"),
      // User have many Items through his Lists
      items: this.hasManyThrough(Item, List, "user_id", "list_id"),
    };
  }
}
