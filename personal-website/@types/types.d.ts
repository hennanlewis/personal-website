interface GraphQLResponse {
	data: Data
	loading: boolean
	networkStatus: number
}

interface Data {
	user: User
}

interface User {
	__typename?: string
	name: string
	pinnedItems: PinnedItems
}

interface PinnedItems {
	__typename?: string
	nodes: Repository[]
}

interface Repository {
	__typename?: string
	id: string
	name: string
	description: string
	homepageUrl: string
	url: string
	repositoryTopics: RepositoryTopics
	object: Object
}

interface RepositoryTopics {
	__typename?: string
	edges: Edge[]
}

interface Edge {
	__typename?: string
	node: Node
}

interface Node {
	__typename?: string
	topic: Topic
}

interface Topic {
	__typename?: string
	name: string
}

interface Object {
	__typename?: string
	entries: Entry[]
}

interface Entry {
	__typename?: string
	name: string
}

interface PinnedRepository {
	id: string
	name: string
	description: string
	homepageUrl: string
	url: string
	repositoryTopics: string[]
	imageName: string[]
}
