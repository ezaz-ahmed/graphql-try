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
