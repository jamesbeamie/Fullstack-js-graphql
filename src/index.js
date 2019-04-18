const { GraphQLServer} = require('graphql-yoga');

// const typeDefs = `
// type Query {
//     info: String!
//     feed: [Link!]!
// }

// type Mutation{
//     post(url: String!, description: String!): Link!
// }

// type Link {
//     id: ID!
//     description: String!
//     url: String!
// }
// `
// our data structure to store the data for links
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Setting up resolvers'
}]

let idCount = links.length

const resolvers = {
    Query: {
        info: () => `McEEN Media`,
        feed: () => links,
    },

    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
    // Link: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url 
    // }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server started on http://localhost:4000`));