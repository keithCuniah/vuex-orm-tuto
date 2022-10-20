<template>
  <div class="">
    <div>
      <h2>Videos</h2>
      <div class="" v-for="video in videos" :key="video.id">
        {{ video.url }}

        <li v-for="comment in video.comments" :key="comment.id">
          {{ comment.body }}
        </li>
      </div>
    </div>
    <div>
      <h2>Posts</h2>
      <div class="" v-for="post in posts" :key="post.id">
        {{ post.title }}

        <li v-for="comment in post.comments" :key="comment.id">
          {{ comment.body }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "@/classes/Video.class";
import Post from "@/classes/Post.class";
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
  },
};
</script>

<style scoped></style>
