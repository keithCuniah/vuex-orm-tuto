import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import Item from "../classes/Item.class";
import User from "../classes/User.class";
import Profile from "../classes/Profile.class";
import List from "../classes/List.class";
import Role from "../classes/Role.class";
import RoleUser from "../classes/RoleUser.class";
import Post from "../classes/Post.class";
import Image from "../classes/Image.class";
import Video from "../classes/Video.class";
import Comment from "../classes/Comment.class";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Item);
database.register(User);
database.register(Profile);
database.register(List);
database.register(Role);
database.register(RoleUser);
database.register(Image);
database.register(Post);
database.register(Video);
database.register(Comment);

export default new Vuex.Store({ plugins: [VuexORM.install(database)] });
