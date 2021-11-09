import { createStore } from 'vuex'
import auth from './auth'
import board from './board'

export default createStore({
	modules: {
		auth,
		board
	},
	state: () => ({
		alert: false,
		message: '',
		loading: false
	}),
	mutations: {
		OPEN_ALERT(state) {
			state.alert = true
		},
		CLOSE_ALERT(state) {
			state.alert = false
		},
		SET_MESSAGE(state, message) {
			state.message = message
		},
		START_LOADING(state) {
			state.loading = true
		},
		END_LOADING(state) {
			state.loading = false
		}
	},
	actions: {
		AUTO_SET_ALERT({ commit }) {
			commit('OPEN_ALERT')
			setTimeout(() => {
				commit('CLOSE_ALERT')
			}, 1000)
		}
	}
})
