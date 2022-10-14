<template>
  <div id="app">
    <div v-for="list in user.lists" :key="list.id">
      {{ list.title }}
      <ul>
        <li v-for="item in list.items" :key="item.id" v-text="item.body" />
      </ul>
    </div>

    <input type="text" v-model="form.body" />
  </div>
</template>

<script>
import Item from "./classes/Item.class";
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
              id: 623,
              title: "shopping",
              items: [
                {
                  id: 602,
                  body: "banana",
                },
                {
                  id: 603,
                  body: "strawberries",
                },
              ],
            },
            {
              id: 624,
              title: "life goals",
              items: [
                {
                  id: 604,
                  body: "be a hero",
                },
                {
                  id: 605,
                  body: "be humble",
                },
              ],
            },
            {
              id: 625,
              title: "friends",
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
