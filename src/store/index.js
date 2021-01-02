import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		transactions: []
	},
	mutations: {
		loadTransactions(state, payload) { state.transactions = payload }
	},
	actions: {
		loadTrans(context){
			axios.get('https://my-json-server.typicode.com/Sunpacker/vue-pagination/db').then((response) => {
				let reversed = response.data.transactions.reverse()
				context.commit('loadTransactions', reversed)
			})
		}
	},
	getters: {
		trans: state => state.transactions,
	}
})
