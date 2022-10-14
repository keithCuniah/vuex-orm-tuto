import { Model } from "@vuex-orm/core";
import Item from "./Item.class";
import User from "./User.class";

export default class List extends Model {
  static entity = "lists";

  static fields() {
    return {
      id: this.attr(null),
      title: this.attr(""),
      user_id: this.attr(null),
      // relationships
      user: this.belongsTo(User, "user_id"),
      items: this.hasMany(Item, "list_id"),
    };
  }
}
