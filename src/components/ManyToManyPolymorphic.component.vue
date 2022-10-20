<template>
  <div class="">
    <div>
      <h2>Videos</h2>
      <div class="" v-for="video in videos" :key="video.id">
        {{ video.url }}

        <li v-for="tag in video.tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </div>
    </div>
    <div class="">
      <h2>Posts</h2>
      <div class="" v-for="post in posts" :key="post.id">
        {{ post.title }}

        <li v-for="tag in post.tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </div>
    </div>
    <div class="">
      <h2>Tags</h2>
      <div class="" v-for="tag in tags" :key="tag.id">
        <h3>{{ tag.name }}</h3>
        <div class="" style="margin-left: 12px">
          <h4>Videos</h4>
          <div class="" v-for="video in tag.videos" :key="video.id">
            {{ video.url }}
          </div>
        </div>
        <div class="" style="margin-left: 12px">
          <h4>Posts</h4>
          <div class="" v-for="post in tag.posts" :key="post.id">
            {{ post.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "@/classes/Video.class";
import Post from "@/classes/Post.class";
import Tag from "@/classes/Tag.class";
export default {
  name: "ManyToManyPolymorphic",
  mounted() {
    Video.insert({
      data: [
        {
          id: 1,
          url: "https://www.youtube.com/watch?v=4mzmW63u4ig&list=RDdTnHAITmuYQ&index=3",
          tags: [
            { id: "60", name: "good music" },
            { id: "61", name: "so cool" },
          ],
        },
      ],
    });
    Post.insert({
      data: [
        {
          id: 1,
          title: "Daboudi dabouda post",
          tags: [
            { id: "60", name: "good music" },
            { id: "61", name: "so cooly cool" },
            { id: "62", name: "very well" },
          ],
        },
      ],
    });
  },
  computed: {
    videos() {
      return Video.query().with("tags").get();
    },
    posts() {
      return Post.query().with("tags").get();
    },
    tags() {
      return Tag.query().with("videos").with("posts").get();
    },
  },
};
</script>

<style lang="scss" scoped></style>
