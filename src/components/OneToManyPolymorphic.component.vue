<template>
  <div class="">
    <h2>Comments</h2>
    <div class="" v-for="comment in comments" :key="comment.id">
      {{ comment.body }} -
      <strong>{{ comment.commentable.constructor.entity }}</strong>
    </div>
  </div>
</template>

<script>
import Video from "@/classes/Video.class";
import Post from "@/classes/Post.class";
import Comment from "@/classes/Comment.class";
export default {
  name: "OneToManyPolymorphic",
  mounted() {
    Video.insert({
      data: [
        {
          id: 12,
          url: "https://www.youtube.com/watch?v=YbxWMDdVSPY",
          comments: [
            {
              id: 23,
              body: "youhou",
            },
            {
              id: 24,
              body: "yeahhh",
            },
            {
              id: 25,
              body: "ohlala",
            },
          ],
        },
        {
          id: 13,
          url: "https://www.youtube.com/watch?v=RyAPJjd5l4s",
          comments: [
            {
              id: 33,
              body: "hahahaha",
            },
            {
              id: 34,
              body: "jajajaja",
            },
            {
              id: 35,
              body: "hihihihi",
            },
          ],
        },
      ],
    });
    Post.insert({
      data: [
        {
          id: 12,
          title: "something controversial",
          comments: [
            {
              id: 45,
              body: "it's cray cray",
            },
            {
              id: 46,
              body: "Madre Mia",
            },
          ],
        },
      ],
    });
  },
  computed: {
    videos() {
      return Video.query().with("comments").get();
    },
    posts() {
      return Post.query().with("comments").get();
    },
    comments() {
      return Comment.query().with("commentable").get();
    },
  },
};
</script>

<style scoped></style>
