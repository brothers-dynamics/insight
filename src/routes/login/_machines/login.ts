import { createMachine } from 'xstate';

export const enum States {
	Idle = 'Idle',
	LoggingIn = 'LoggingIn',
	LoggedIn = 'LogedIn',
	LoginFailed = 'LoginFailed',
	InvalidCredentials = 'InvalidCredentials'
}

const EVENTS = {
	LOGIN: [
		{
			target: States.InvalidCredentials,
			cond: (_: any, event: any): boolean => {
				return !event.username || !event.password;
			}
		},
		{
			target: States.LoggingIn
		}
	]
};

const SERVICES = {
	async login() {
		return new Promise((res) => {
			setTimeout(res, 2000);
		});
	}
};

export const Machine = createMachine({
	predictableActionArguments: true,
	id: 'login',
	initial: States.Idle,
	states: {
		[States.Idle]: {
			on: {
				LOGIN: EVENTS.LOGIN
			}
		},
		[States.LoggingIn]: {
			invoke: {
				src: SERVICES.login,
				onDone: {
					target: States.LoggedIn
				},
				onError: {
					target: States.LoginFailed
				}
			}
		},
		[States.LoginFailed]: {
			on: {
				LOGIN: EVENTS.LOGIN
			}
		},
		[States.InvalidCredentials]: {
			after: {
				1000: {
					target: States.Idle
				}
			}
		},
		[States.LoggedIn]: {
			type: 'final'
		}
	}
});
