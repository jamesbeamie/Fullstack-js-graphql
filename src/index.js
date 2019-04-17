const { GraphQLServer} = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
}
`

const resolvers = {
    Query: {
        info: () => `McEEN Media`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server started on http://localhost:4000`));