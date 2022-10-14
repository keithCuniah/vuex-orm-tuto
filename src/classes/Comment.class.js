import { Model } from "@vuex-orm/core";

export default class Comment extends Model {
  static entity = "comments";
  static fields() {
    return {
      id: this.uid(),
      body: this.attr(null),
    };
  }
}
