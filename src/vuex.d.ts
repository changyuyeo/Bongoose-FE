import { Store } from 'vuex'
import { RootState } from '@/store'

declare module 'vue' {
	interface ComponentCustomProperties {
		$store: Store<RootState>
	}
}
