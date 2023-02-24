export const generateProjectImageURL = (
	repositoryName: string,
	imageName: string
) =>
	`https://raw.githubusercontent.com/hennanlewis/${repositoryName}/main/doc/${imageName}`
