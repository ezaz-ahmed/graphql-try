import { MovieList, UserList } from '../FakeData.js';

export const resolvers = {
  Query: {
    users: () => UserList,
    user: (_, args) => UserList.find(user => user.id === Number(args.id)),
    movies: () => MovieList,
    movie: (_, args) => MovieList.find(movie => movie.name === args.name),
  },
};
