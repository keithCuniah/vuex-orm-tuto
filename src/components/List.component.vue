<template>
  <div>
    <h2>{{ list.title }}</h2>
    <input type="text" v-model="form.body" />
    <button @click="addItem">Add Item</button>

    <ul>
      <li v-for="item in filledList.items" :key="item.id">
        {{ item.body }}
        <button @click="deleteItem(item.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import List from "@/classes/List.class";
import Item from "@/classes/Item.class";
export default {
  name: "ListComponent",
  props: {
    list: {
      type: List,
      required: true,
    },
  },
  computed: {
    filledList() {
      return List.query().with("items").find(this.list.id);
    },
  },
  data() {
    return {
      form: {
        body: "",
        list_id: this.list.id,
      },
    };
  },
  methods: {
    addItem() {
      Item.insert({
        data: this.form,
      });
    },
    deleteItem(id) {
      Item.delete(id);
    },
  },
};
</script>
