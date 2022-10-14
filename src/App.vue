<template>
  <div id="app">
    <h1>{{ user.name }}</h1>

    <input type="text" v-model="form.title" />
    <button @click="addList">Add List</button>

    <ListComponent v-for="list in user.lists" :key="list.id" :list="list" />
  </div>
</template>

<script>
import List from "./classes/List.class";
import User from "./classes/User.class";
import ListComponent from "./components/List.component.vue";
export default {
  name: "App",
  components: {
    ListComponent,
  },
  data() {
    return {
      form: {
        title: "",
        user_id: 28,
      },
    };
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: "Daboudi",
          email: "daboudi@patati.com",
        },
      ],
    });
  },
  computed: {
    user() {
      return User.query().with("lists.items").find(28);
    },
  },
  methods: {
    addList() {
      List.insert({ data: this.form });
    },
  },
};
</script>

<style></style>
