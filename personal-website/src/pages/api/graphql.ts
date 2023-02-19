import client from "@/utils/apollo-client"
import { NextApiRequest, NextApiResponse } from "next"

import { graphQLQuery } from "@/utils/grapgQLQuery"

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const response: GraphQLResponse = await client.query({
		query: graphQLQuery,
	})

	const clearedPinnedRepos = response.data.user.pinnedItems.nodes.map(
		(repo: Repository) => {
			//prettier-ignore
			const { id, name, description, homepageUrl, url, repositoryTopics, object } = repo

			const imageName: string[] =
				object?.entries
					?.filter((item) => item.name.match(/Screenshot/gi))
					.map((item) => item.name) ?? []

			//prettier-ignore
			return { id, name, description, homepageUrl, url, repositoryTopics, imageName }
		}
	)

	const PinnedRepositoryitoryTopics = clearedPinnedRepos.map((repo) => {
		const repositoryTopics = repo.repositoryTopics.edges.map(
			(topic) => topic.node.topic.name
		)
		return { ...repo, repositoryTopics }
	})

	res.status(200).json(PinnedRepositoryitoryTopics)
}
