const { makeExecutableSchema } = require('graphql-tools');
const { countAllPrices: count } = require('./db');

const foos = () => ([
  { name: 'FOO' },
  { name: 'BAR' },
  { name: 'BAZ' },
]);

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
    foos,
    count,
  }
};

const Schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = Schema;
