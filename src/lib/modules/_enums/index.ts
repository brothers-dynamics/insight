import { kitqlModules } from '@kitql/all-in'

import { typeDefs } from './$kitql/typedefs'

export const _enumsModule = kitqlModules({
	id: 'enums-module',
	typeDefs
})
