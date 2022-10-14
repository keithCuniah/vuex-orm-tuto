<template>
  <div id="app">
    <h1>{{ user.name }}</h1>
    <div v-for="list in user.lists" :key="list.id">
      {{ list.title }}
      <ul>
        <li v-for="item in list.items" :key="item.id" v-text="item.body" />
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "./classes/Item.class";
import List from "./classes/List.class";
import User from "./classes/User.class";

export default {
  name: "App",
  data() {
    return { form: { body: "" } };
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: "Daboudi",
          email: "daboudi@patati.com",
          lists: [
            {
              id: 62,
              title: "shopping",
            },
            {
              id: 63,
              title: "favourite things",
            },
            {
              id: 64,
              title: "todo",
            },
          ],
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
    addItem() {
      Item.insert({ data: this.form });
    },
  },
};
</script>

<style></style>
