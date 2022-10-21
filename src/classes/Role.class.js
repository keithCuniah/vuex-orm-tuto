import { Model } from "@vuex-orm/core";
import RoleUser from "./RoleUser.class";
import { User } from "./UserHierarchy.class";

export default class Role extends Model {
  static entity = "roles";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(),
      // relationships
      users: this.belongsToMany(User, RoleUser, "role_id", "user_id"),
    };
  }
}
