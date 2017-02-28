const graphql = require('graphql');

const {
  GraphQLString,
  GraphQLObjectType
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
