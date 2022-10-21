import User from "@/classes/User.class";

export default () => {
  User.insertOrUpdate({
    data: [
      {
        id: 1,
        first_name: "Daboudi",
        last_name: "Dabouda",
        age: 28,
        posts: [
          {
            id: 10,
            published: true,
            title: "I'm blue",
            tags: [
              {
                id: 20,
                name: "song",
              },
              {
                id: 21,
                name: "depression",
              },
            ],
            comments: [
              {
                id: 30,
                user_id: 2,
                body: "classical song from the 90's",
              },
              {
                id: 31,
                user_id: 2,
                body: "THIS IS MY SONNNNGGGG!!!",
              },
            ],
          },
          {
            id: 11,
            title: "I'm a scatman",
            tags: [{ id: 40, name: "song" }],
            comments: [{ user_id: 3, id: 3, body: "It's a very deep song" }],
          },
          { id: 12, title: "just a post" },
        ],
      },
    ],
  });

  User.insertOrUpdate({
    data: {
      id: 2,
      first_name: "Patati",
      age: 27,
      posts: [
        {
          id: 4,
          title: "Le feu ça brule et l'eau ça mouille",
          tags: [{ id: 2, title: "song" }],
          comments: [{ user_id: 3, id: 4, body: "True story" }],
        },
      ],
    },
  });

  User.insertOrUpdate({
    data: { id: 3, first_name: "Charlie & Lulu", age: 4 },
  });
};
