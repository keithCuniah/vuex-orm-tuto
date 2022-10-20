import { Model } from "@vuex-orm/core";
import Comment from "./Comment.class";
import Tag from "./Tag.class";
import Taggable from "./Taggable.class";

export default class Video extends Model {
  static entity = "videos";
  static fields() {
    return {
      id: this.uid(),
      url: this.attr(null),
      // relationships
      comments: this.morphMany(Comment, "commentable_id", "commentable_type"),
      tags: this.morphToMany(
        Tag,
        Taggable,
        "tag_id",
        "taggable_id",
        "taggable_type"
      ),
    };
  }
}
