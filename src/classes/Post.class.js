import { Model } from "@vuex-orm/core";
import Comment from "./Comment.class";
import Image from "./Image.class";
import Tag from "./Tag.class";
import Taggable from "./Taggable.class";
import User from "./User.class";

export default class Post extends Model {
  static entity = "posts";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(null),
      image: this.morphOne(Image, "imageabble_id", "imageabble_type"),
      user_id: this.attr(null),
      published: this.boolean(false),
      // relationships
      user: this.belongsTo(User, "user_id"),
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
