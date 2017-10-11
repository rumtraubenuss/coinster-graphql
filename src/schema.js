const { makeExecutableSchema } = require('graphql-tools');

const dummyEntries = [
  { name: 'FOO' },
  { name: 'BAR' },
  { name: 'BAZ' },
];

const typeDefs = `
type Foo {
  name: String
}

type Query {
  foos: [Foo]
}
`;

const resolvers = {
  Query: {
    foos: () => dummyEntries,
  }
};

const Schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = Schema;
