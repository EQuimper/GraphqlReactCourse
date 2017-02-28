const graphql = require('graphql');

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        // Don't forget to return here if we want graphql know this is a promise
        // and wait until this action is resolve
        return AuthService.signup({ ...args, req });
      }
    },
    login: {
      type: UserType,
      resolve(parentValue, args, req) {
        return AuthService.login({ ...args, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
  }
});

module.exports = mutation;
