import { Model } from "@vuex-orm/core";
import Image from "./Image.class";
import Item from "./Item.class";
import List from "./List.class";
0;

import Profile from "./Profile.class";
import Role from "./Role.class";
import RoleUser from "./RoleUser.class";
import moment from "moment";

export default class User extends Model {
  static entity = "users";

  get full_name() {
    return `${this.first_name} ${this.last_name}`;
  }

  static mutators() {
    return {
      last_name(value) {
        return value.toUpperCase();
      },
      date_born(value) {
        if (value) return moment(value);
      },
    };
  }

  static fields() {
    return {
      id: this.uid(),
      first_name: this.attr(""),
      last_name: this.attr(""),
      email: this.attr(""),
      age: this.attr(""),
      date_born: this.attr(""),
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
