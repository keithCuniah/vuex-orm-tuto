import { Model } from "@vuex-orm/core";
import Comment from "./Comment.class";

export default class Video extends Model {
  static entity = "videos";
  static fields() {
    return {
      id: this.uid(),
      url: this.attr(null),
      // relationships
      comments: this.morphMany(Comment, "commentable_id", "commentable_type"),
    };
  }
}
