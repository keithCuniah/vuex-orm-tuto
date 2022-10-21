<template>
  <div>
    <pre>
      {{ results }}
    </pre>
  </div>
</template>

<script>
import insertUsers from "@/orm-queries/inserUsers.ormQuery";
import User from "@/classes/User.class";
import Post from "@/classes/Post.class";
export default {
  name: "AdvancedRelationshipQueries",
  mounted() {
    insertUsers();
  },
  computed: {
    results() {
      return Post.query().hasNot("comments").get();
    },
  },
};
</script>

<style lang="scss" scoped></style>
