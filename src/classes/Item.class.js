import { Model } from "@vuex-orm/core";
import List from "./List.class";

export default class Item extends Model {
  static entity = "items";

  static fields() {
    return {
      id: this.uid(),
      body: this.attr(""),
      list_id: this.attr(null),
      // relationships
      lists: this.belongsTo(List, "list_id"),
    };
  }
}
