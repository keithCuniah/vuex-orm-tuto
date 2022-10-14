import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import Item from "../classes/Item.class";
import User from "../classes/User.class";
import Profile from "../classes/Profile.class";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Item);
database.register(User);
database.register(Profile);

export default new Vuex.Store({ plugins: [VuexORM.install(database)] });
