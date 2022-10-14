<template>
  <div>
    <ul v-for="role in roles" :key="role.id">
      <h1>{{ role.title }}</h1>
      <li v-for="user in role.users" :key="user.id" v-text="user.name" />
    </ul>

    <button @click="changeName">change name</button>
  </div>
</template>

<script>
import User from "@/classes/User.class";
import Role from "@/classes/Role.class";
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
    roles() {
      return Role.query().with("users").get();
    },
  },
  methods: {
    changeName() {
      User.update({
        where: 28,
        data: {
          name:"Jean Bon"
        },
      });
    },
  },
};
</script>

<style scoped></style>
