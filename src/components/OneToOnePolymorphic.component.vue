<template>
  <div>
    <div v-for="image in images" :key="image.id">
      {{ image.imageabble.constructor.entity }}
    </div>
  </div>
</template>

<script>
import User from "../classes/User.class";
import Image from "../classes/Image.class";
import Post from "../classes/Post.class";

export default {
  name: "OneToOnePolymorphic",
  created() {
    User.insert({
      data: [
        {
          name: "Jean Bon",
          id: 22,
          image: { url: `https://robohash.org/22` },
        },
      ],
    });
    Post.insert({
      data: [
        {
          title: "Awesome Post",
          id: 32,
          image: { url: `https://robohash.org/22?set=set5` },
        },
      ],
    });
  },
  computed: {
    user() {
      return User.query().with("image").find(22);
    },
    post() {
      return Post.query().with("image").find(32);
    },
    images() {
      return Image.query().with("imageabble").get();
    },
  },
};
</script>

<style scoped></style>
