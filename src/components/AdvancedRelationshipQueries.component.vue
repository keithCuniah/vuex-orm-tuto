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
export default {
  name: "AdvancedRelationshipQueries",
  mounted() {
    insertUsers();
  },
  computed: {
    results() {
      return User.query()
        .with("posts.comments", (query) => {
          query.where("type", 'reviewed');
        })
        .get();
    },
  },
};
</script>

<style lang="scss" scoped></style>
