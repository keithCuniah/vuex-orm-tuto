import { Model } from "@vuex-orm/core";

export default class Image extends Model {
  static entity = "images";

  static fields() {
    return {
      id: this.uid(),
      url: this.attr(null),
      imageabble_id: this.attr(null),
      imageabble_type: this.attr(null),
      // relationships
      imageabble: this.morphTo("imageabble_id", "imageabble_type"),
    };
  }
}
