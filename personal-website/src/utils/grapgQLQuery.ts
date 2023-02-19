import { gql } from "@apollo/client"

export const graphQLQuery = gql`
	query pinnedRepos {
		user(login: "hennanlewis") {
			name
			pinnedItems(first: 6) {
				nodes {
					... on Repository {
						id
						name
						description
						homepageUrl
						url
						repositoryTopics(first: 5) {
							edges {
								node {
									topic {
										name
									}
								}
							}
						}
						object(expression: "main:doc") {
							... on Tree {
								entries {
									name
								}
							}
						}
					}
				}
			}
		}
	}
`
