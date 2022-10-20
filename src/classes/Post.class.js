import { Model } from "@vuex-orm/core";
import Comment from "./Comment.class";
import Image from "./Image.class";

export default class Post extends Model {
  static entity = "posts";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(null),
      image: this.morphOne(Image, "imageabble_id", "imageabble_type"),
      // relationships
      comments: this.morphMany(Comment, "commentable_id", "commentable_type"),
    };
  }
}
