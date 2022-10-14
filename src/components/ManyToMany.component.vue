<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <h1>{{ user.name }}</h1>
      <li v-for="role in user.roles" :key="role.id" v-text="role.title" />
    </ul>
  </div>
</template>

<script>
import User from "@/classes/User.class";
export default {
  name: "ManyToMany",
  mounted() {
    User.insert({
      data: [
        {
          id: 28,
          name: "Daboudi",
          email: "daboudi@patati.com",
          roles: [
            {
              id: 43,
              title: "admin",
            },
            {
              id: 44,
              title: "designer",
            },
          ],
        },
        {
          id: 22,
          name: "Dabouda",
          email: "dabouda@patati.com",
          roles: [
            {
              id: 44,
              title: "designer",
            },
          ],
        },
      ],
    });
  },
  computed: {
    users() {
      return User.query().with("roles").get();
    },
  },
};
</script>

<style scoped></style>
