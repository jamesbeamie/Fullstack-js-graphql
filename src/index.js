const { GraphQLServer} = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}
type Link {
    id: ID!
    description: String!
    url: String!
}
`
// our data structure to store the data for links
let links = [{
    id: 'link_id',
    url: 'www.howtographql.com',
    description: 'Setting up resolvers'
}]

const resolvers = {
    Query: {
        info: () => `McEEN Media`,
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url 
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server started on http://localhost:4000`));