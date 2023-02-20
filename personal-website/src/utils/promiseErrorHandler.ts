export const promiseErrorHandler = <T>(
	inputPromise: Promise<T>
): Promise<(T | null)[] | [null, Error]> =>
	inputPromise
		.then((response) => [response, null])
		.catch((error: Error) => [null, error])
