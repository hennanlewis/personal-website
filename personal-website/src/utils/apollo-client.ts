import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
	uri: "https://api.github.com/graphql",
})

const authLink = setContext((_, { headers }) => ({
	headers: {
		...headers,
		authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	},
}))

const client = new ApolloClient({
	link: authLink.concat(httpLink),

	cache: new InMemoryCache(),
})

export default client
