const { GraphQLServer} = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client'); 

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
// let links = [{
//     id: 'link-0',
//     url: 'www.howtographql.com',
//     description: 'Setting up resolvers'
// }]

// let idCount = links.length

const resolvers = {
    Query: {
        info: () => `McEEN Media`,
        feed: (root, args, context, info) => {
            return context.prisma.links()
        },
    },

    Mutation: {
        post: (root, args, context) => {
            return context.prisma.createLink({
                url: args.url,
                description: args.description,
            })
        },
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
})

server.start(() => console.log(`Server started on http://localhost:4000`));