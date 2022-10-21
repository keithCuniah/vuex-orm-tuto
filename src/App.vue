<template>
  <div id="app">
    <SingleTableInheritance />
    <!-- <div style="float: left">
      <h1>{{ user.name }}</h1>

      <input type="text" v-model="form.title" />
      <button @click="addList">Add List</button>

      <ListComponent v-for="list in user.lists" :key="list.id" :list="list" />
    </div>

    <div style="float: right">
      <ul>
        <li v-for="item in user.items" :key="item.id" v-text="item.body" />
      </ul>
    </div> -->
  </div>
</template>

<script>
import SingleTableInheritance from "./components/SingleTableInheritance.component.vue";
export default {
  name: "App",
  components: {
    SingleTableInheritance,
  },
  data() {
    return {
      // form: {
      //   title: "",
      //   user_id: 28,
      // },
    };
  },
  beforeMount() {
    // User.insert({
    //   data: [
    //     {
    //       id: 28,
    //       name: "Daboudi",
    //       email: "daboudi@patati.com",
    //       lists: [
    //         {
    //           id: 22,
    //           title: "shopping",
    //           items: [
    //             {
    //               id: 62,
    //               body: "banana",
    //             },
    //           ],
    //         },
    //         {
    //           id: 2,
    //           title: "todo",
    //           items: [
    //             {
    //               id: 6,
    //               body: "do a todo list",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // });
  },
  computed: {
    // user() {
    //   return User.query().with("lists.items").with("items").find(28);
    // },
  },
  methods: {
    // addList() {
    //   List.insert({ data: this.form });
    // },
  },
};
</script>

<style></style>
