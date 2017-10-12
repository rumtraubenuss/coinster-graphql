const { makeExecutableSchema } = require('graphql-tools');
const { countAllPrices: count } = require('./db');

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
  count: Int
}
`;

const resolvers = {
  Query: {
    foos: () => dummyEntries,
    count,
  }
};

const Schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = Schema;
