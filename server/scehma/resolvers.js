import { UserList } from '../FakeData.js';

export const resolvers = {
  Query: {
    users: () => UserList,
    user: (_, args) => UserList.find(user => user.id === Number(args.id)),
  },
};
