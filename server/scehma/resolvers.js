import { MovieList, UserList } from '../FakeData.js';

export const resolvers = {
  Query: {
    users: () => UserList,
    user: (_, args) => UserList.find(user => user.id === Number(args.id)),
    movies: () => MovieList,
    movie: (_, args) => MovieList.find(movie => movie.name === args.name),
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const id = UserList.length;
      user.id = id;
      UserList.push(user);
      return user;
    },
    updateUser: (parent, args) => {
      const user = UserList.find(user => user.id === Number(args.input.id));

      const { name, username, age, nationality } = { ...args.input };

      user.age = age;
      user.name = name;
      user.username = username;
      user.nationality = nationality;

      return user;
    },
    deleteUser: (parent, args) => {
      UserList.filter(user => user.id !== Number(args.id));
      return null;
    },
  },
  User: {
    favoriteMovies: () => {
      return MovieList.filter(
        movie =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
};
