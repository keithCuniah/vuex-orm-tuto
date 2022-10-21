<template>
  <div>
    <button @click="offset = offset - 2">Previous</button>
    <button @click="offset = offset + 2">Next</button>
    <pre>
        {{ result }}
    </pre>
  </div>
</template>

<script>
import User from "@/classes/User.class";
export default {
  name: "AdvancedQueries",
  data() {
    return {
      offset: 0,
    };
  },
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
      return User.query().limit(3).offset(this.offset).get();
    },
  },
};
</script>

<style lang="scss" scoped></style>
