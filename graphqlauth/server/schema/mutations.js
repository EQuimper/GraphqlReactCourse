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
      resolve(parentValue, { email, password }, req) {
        // Don't forget to return here if we want graphql know this is a promise
        // and wait until this action is resolve
        return AuthService.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
