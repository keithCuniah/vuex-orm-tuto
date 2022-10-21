import { Model } from "@vuex-orm/core";
import Image from "./Image.class";
import Item from "./Item.class";
import List from "./List.class";
import Profile from "./Profile.class";
import Role from "./Role.class";
import RoleUser from "./RoleUser.class";
import Post from "./Post.class";
import { Admin, Publisher, SuperAdmin } from "./UserHierarchy.class";

export class User extends Model {
  static entity = "users";

  get full_name() {
    return `${this.first_name} ${this.last_name}`;
  }

  static mutators() {
    return {
      last_name(value) {
        return value.toUpperCase();
      },
    };
  }

  post() {
    console.log("Making a post");
  }
  login() {
    console.log("logging in");
  }

  static types() {
    return {
      ADMIN: Admin,
      PUBLISHER: Publisher,
      SUPER_ADMIN: SuperAdmin,
    };
  }

  static fields() {
    return {
      id: this.uid(),
      type: this.attr("USER"),
      first_name: this.attr(""),
      last_name: this.attr(""),
      email: this.attr(""),
      age: this.attr(""),
      // relationships
      posts: this.hasMany(Post, "user_id"),
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
