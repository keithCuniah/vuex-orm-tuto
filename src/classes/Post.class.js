import { Model } from "@vuex-orm/core";
import Image from "./Image.class";

export default class Post extends Model {
  static entity = "posts";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(null),
      image: this.morphOne(Image, "imageabble_id", "imageabble_type"),
    };
  }
}
