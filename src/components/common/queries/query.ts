export interface IQueryHandler<TQuery, TResponse> {
	handle(query: TQuery): Promise<TResponse>;
}

export type IQuery<TQuery, TResponse> = (query: TQuery) => Promise<TResponse>;
