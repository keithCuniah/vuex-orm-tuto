import { Model } from "@vuex-orm/core";
import Image from "./Image.class";
import Item from "./Item.class";
import List from "./List.class";
import Profile from "./Profile.class";
import Role from "./Role.class";
import RoleUser from "./RoleUser.class";
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
      roles: this.belongsToMany(Role, RoleUser, "user_id", "role_id"),
      image: this.morphOne(Image, "imageabble_id", "imageabble_type"),
    };
  }
}
