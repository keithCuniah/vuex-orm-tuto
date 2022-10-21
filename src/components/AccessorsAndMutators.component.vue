<template>
  <div>
    <h2>Users</h2>
    <p>{{ user.date_born }}</p>
  </div>
</template>

<script>
import User from "@/classes/User.class";
export default {
  name: "AccessorsAndMutators",
  created() {
    User.insert({
      data: [
        {
          id: 28,
          first_name: "Daboudi",
          last_name: "DABOUDA",
          date_born: "1990-02-04T23:00:00.000Z",
        },
      ],
    });
  },
  computed: {
    user() {
      return User.find(28);
    },
  },
};
</script>

<style lang="scss" scoped></style>
