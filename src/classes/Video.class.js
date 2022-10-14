import { Model } from "@vuex-orm/core";

export default class Video extends Model {
  static entity = "videos";
  static fields() {
    return {
      id: this.uid(),
      url: this.attr(null),
    };
  }
}
