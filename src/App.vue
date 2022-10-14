<template>
  <div id="app">
    <h1 style="color: orange">{{ profile.user.name }}</h1>
    <p>{{ profile.bio }}</p>

    <input type="text" v-model="form.body" />
    <button @click="addItem">Add Item</button>
    <li v-for="item in items" :key="item.$id" v-text="item.body" />
  </div>
</template>

<script>
import Item from "./classes/Item.class";
import User from "./classes/User.class";
import Profile from "./classes/Profile.class";

export default {
  name: "App",
  data() {
    return { form: { body: "" } };
  },
  beforeMount() {
    User.insert({
      data: {
        id: 28,
        name: "Daboudi",
        email: "daboudi@patati.com",
        profile: {
          id: 55,
          bio: "is blue",
          life_bio: "sing that he is blue",
          user_id: 28,
        },
      },
    });
  },
  computed: {
    profile() {
      return Profile.query().with("user").find(55);
    },
    items() {
      return Item.all();
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
