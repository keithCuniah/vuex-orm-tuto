<template>
  <div>
    <div class="">
      <h2>Users</h2>
      <div class="" v-for="user in users" :key="user.id">
        {{ user.first_name }} - {{ user.last_name }}
      </div>
    </div>
    <div class="">
      <h2>Publishers</h2>
      <div class="" v-for="user in publishers" :key="user.id">
        {{ user.first_name }} - {{ user.last_name }}
      </div>
    </div>
    <div class="">
      <h2>Admin</h2>
      <div class="" v-for="user in admins" :key="user.id">
        {{ user.first_name }} - {{ user.last_name }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  Admin,
  Publisher,
  SuperAdmin,
  User,
} from "@/classes/UserHierarchy.class";

export default {
  name: "SingleTableInheritance",
  mounted() {
    User.insert({
      data: [
        {
          id: 1,
          first_name: "Daboudi",
          last_name: "Dabouda",
          type: "PUBLISHER",
        },
        { id: 2, first_name: "Jean", last_name: "Bon", type: "ADMIN" },
        { id: 3, first_name: "Juan", last_name: "Bueno", type: "SUPER_ADMIN" },
      ],
    });

    // Daboudi dabouda can't delete account because he is just a normal user
    this.users.forEach((user) => {
      try {
        User.find(user.id).deleteAccount();
        console.log(
          `The User : '${user.first_name}-${user.last_name}' have deleted the Account`
        );
      } catch (err) {
        console.error(
          `The User : '${user.first_name}-${user.last_name}' can't delete Account because he is just a normal user`
        );
      }
    });
    //
    User.find(1).deleteAccount();
    User.find(1).deleteAccount();
  },
  computed: {
    users() {
      return User.all();
    },
    publishers() {
      return Publisher.all();
    },
    admins() {
      return Admin.all();
    },
    superAdmins() {
      return SuperAdmin.all();
    },
  },
};
</script>

<style lang="scss" scoped></style>
