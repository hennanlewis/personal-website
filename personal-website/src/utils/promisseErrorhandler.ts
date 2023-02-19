export const promisseErrorHandler = <T>(
	inputPromise: Promise<T>
): Promise<(T | null)[] | [null, Error]> =>
	inputPromise.then((a) => [a, null]).catch((error: Error) => [null, error])
