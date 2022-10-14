<template>
  <div id="app">
    <div v-for="profile in profiles" :key="profile.id">
      <h1 style="color: orange">{{ profile.user.name }}</h1>
      <p>{{ profile.bio }}</p>
    </div>

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
      data: [
        {
          id: 28,
          name: "Daboudi",
          email: "daboudi@patati.com",
          profile: {
            id: 55,
            bio: "is blue",
            life_bio: "sing that he is blue",
          },
        },
        {
          id: 29,
          name: "Dabouda",
          email: "dabouda@patato.com",
          profile: {
            id: 56,
            bio: "is also blue",
            life_bio: "also sing that he is blue",
          },
        },
        {
          id: 30,
          name: "JeanBon",
          email: "jeanbon@youhou.com",
          profile: {
            id: 57,
            bio: "is vegan",
            life_bio: "kill all the vegetables",
          },
        },
      ],
    });
  },
  computed: {
    profiles() {
      return Profile.query().with("user").get();
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
