import { Model } from "@vuex-orm/core";
import Post from "./Post.class";
import Taggable from "./Taggable.class";
import Video from "./Video.class";

export default class Tag extends Model {
  static entity = "tags";

  static fields() {
    return {
      id: this.uid(),
      name: this.attr(null),

      // relationships
      videos: this.morphedByMany(
        Video,
        Taggable,
        "tag_id",
        "taggable_id",
        "taggable_type"
      ),
      posts: this.morphedByMany(
        Post,
        Taggable,
        "tag_id",
        "taggable_id",
        "taggable_type"
      ),
    };
  }
}
