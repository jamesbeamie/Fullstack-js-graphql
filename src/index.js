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
    typeDefs,
})

server.start(() => console(`Server started`));