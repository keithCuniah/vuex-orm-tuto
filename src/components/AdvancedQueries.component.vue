<template>
  <div>
    <pre>
        {{ result }}
    </pre>
  </div>
</template>

<script>
import User from "@/classes/User.class";
export default {
  name: "AdvancedQueries",
  mounted() {
    User.insert({
      data: [
        {
          id: 1,
          first_name: "Daboudi",
          last_name: "Dabouda",
          age: 20,
        },
        {
          id: 2,
          first_name: "Patati",
          last_name: "Patata",
          age: 25,
        },
        {
          id: 3,
          first_name: "Jean",
          last_name: "Bon",
          age: 50,
        },
        {
          id: 4,
          first_name: "Juan",
          last_name: "Bueno",
          age: 60,
        },
      ],
    });
  },
  computed: {
    result() {
      return User.query()
        .where((user, query) => {
          query.where("first_name", "Jean").orWhere("first_name", "Juan");
        })
        .get();
    },
  },
};
</script>

<style lang="scss" scoped></style>
