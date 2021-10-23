export type IQueryHandler<TQuery, TResponse> = (query: TQuery) => Promise<TResponse>;
