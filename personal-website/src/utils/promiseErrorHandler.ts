export const promiseErrorHandler = <T>(
	inputPromise: Promise<T>,
	finallyFunction?: unknown
): Promise<(T | null)[] | [null, Error]> =>
	inputPromise
		.then((response) => [response, null])
		.catch((error) => {
			console.log(error)
			return [null, error]
		})
		.finally(() => finallyFunction)
