export interface ICommandHandler<TCommand> {
	handle(command: TCommand): Promise<void>;
}

export type ICommand<TCommand> = (command: TCommand) => Promise<void>;
