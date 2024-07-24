import { ApolloServer, gql} from 'apollo-server'
// Arreglo con personas quemadas para la prueba
const persons = [
    {
        name: "John Doe",
        phone: "555-1234",
        street: "123 Main St",
        city: "Anytown",
        id: 1
    },
    {
        name: "Jane Smith",
        phone: "555-5678",
        street: "456 Elm St",
        city: "Othertown",
        id: 2
    },
    {
        name: "Michael Johnson",
        phone: "555-2468",
        street: "789 Oak St",
        city: "Sometown",
        id: 3
    },
    {
        name: "Emily Davis",
        phone: "555-1357",
        street: "321 Pine St",
        city: "Anothertown",
        id: 4
    },
    {
        name: "Chris Wilson",
        phone: "555-9876",
        street: "654 Birch St",
        city: "Yourtown",
        id: 5
    },
    {
        name: "Jessica Brown",
        phone: "555-4321",
        street: "987 Cedar St",
        city: "Hometown",
        id: 6
    },
    {
        name: "David Martinez",
        phone: "555-7890",
        street: "741 Maple St",
        city: "Somewhere",
        id: 7
    },
    {
        name: "Sarah Taylor",
        phone: "555-3690",
        street: "852 Walnut St",
        city: "Nowhere",
        id: 8
    },
    {
        name: "Kevin White",
        phone: "555-6543",
        street: "159 Pineapple St",
        city: "Anyplace",
        id: 9
    },
    {
        name: "Laura Garcia",
        phone: "555-9514",
        street: "753 Orange St",
        city: "Everytown",
        id: 10
    }
];


//! significa requerido
// Se pasan las definiciones a gql y se define query y sus metodos
const typeDefs = gql `
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
    type Query {
    personCount: Int!
    allPersons: [Person]!
    }
`

// Los resolvers son como los metodos van a obtener los datos al realizar el query
const resolvers = {
    Query:{
        personCount: () => persons.length,
        allPersons: () => persons
    }
};

//Se crea el server y se le pasa los resolvers y las definiciones
const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers: resolvers
});

// Se inicia el servidor
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
});