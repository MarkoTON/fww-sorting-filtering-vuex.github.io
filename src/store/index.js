import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usersJSON: [],
		byName: null,
		byBalance: null,
		byActive: null,
		byState: null,
		byRegistered: null,
		byCountry: null
	},
	mutations: {
		SET_USERS_FROM_API(state, users) {
			let countryState = [];
			users.forEach(element => {
				for(let i = 0; i < element.state.length; i++){
					let usersInLoop = element.state[i];
					usersInLoop.country = element.country;
					countryState.push(usersInLoop);
				}
			});

			let stateUsers = [];

			countryState.forEach(element =>{
        for(let i = 0; i < element.users.length;i++){
          var fixTime = element.users[i].registered.replace("T"," ")
          let userInLoop = element.users[i]
          userInLoop.name = element.name;
          userInLoop.country = element.country;
          userInLoop.registered = fixTime;
          // Add all users in one array
          stateUsers.push(userInLoop)
        }
			});
			state.usersJSON = stateUsers;
		},
		sortByName(state){
			var order = !state.byName;
			state.byName = !state.byName;
      state.usersJSON.sort(function (a, b) {
				var nameA = a.fullName.toUpperCase(); 
				var nameB = b.fullName.toUpperCase(); 
				if(order){
					if (nameA < nameB) {
						return -1;
					} else {
						return 1
					}
				} else {
					if (nameA < nameB){
						return 1;
					} else {
						return -1
					}
				}
			});
		},
		sortByBalance(state){
			var order = !state.byBalance;
		  state.byBalance = !state.byBalance;
			state.usersJSON.sort(function (a, b) {
				var balanceA = parseFloat(a.balance.substring(1).replace(",","").replace(".",""))
				var balanceB = parseFloat(b.balance.substring(1).replace(",","").replace(".",""))
				if(order){
					return balanceA - balanceB
				} else {
					return balanceB - balanceA
				}
			});
		},
		sortByActive(state){
      var order = !state.byActive;
      state.byActive = !state.byActive;
      state.usersJSON.sort(function(x, y) {
        if(order){
          return (x.isActive === y.isActive) ? 0 : x.isActive ? 1 : -1;
        } else {
          return (x.isActive === y.isActive) ? 0 : x.isActive ? -1 : 1;
        }
      });
		},
		sortByRegistered(state){
      var order = state.byRegistered;
      state.byRegistered = !state.byRegistered;
      state.usersJSON.sort(function (a, b) {
        var registeredA = a.registered; 
        var registeredB = b.registered; 
        if(order){
          return new Date(registeredB) - new Date(registeredA);
        } else {
          return new Date(registeredA) - new Date(registeredB);
        }
      });
    },
		sortByState(state){
      var order = !state.byState;
      state.byState = !state.byState;
      state.usersJSON.sort(function (a, b) {
        var stateA = a.name.toUpperCase(); 
        var stateB = b.name.toUpperCase(); 
        if(order){
          if (stateA < stateB) {
            return -1;
          } else {
            return 1
          }
        } else {
          if (stateA < stateB) {
            return 1;
          } else {
            return -1
          }
        }
      });
		},
		sortByCountry(state){
      var order = !state.byCountry;
      state.byCountry = !state.byCountry;
      state.usersJSON.sort(function (a, b) {
        var countryA = a.country.toUpperCase(); 
        var countryB = b.country.toUpperCase(); 
        if(order){
          if (countryA < countryB) {
            return -1;
          } else {
            return 1
          }
        } else {
          if (countryA < countryB) {
            return 1;
          } else {
            return -1
          }
        }
      });
    },
	},
	actions: {
		getPosts({ commit }) {
			axios.get('https://fww-demo.herokuapp.com/')
			.then(response => {
			commit('SET_USERS_FROM_API', response.data)
			})
		},
	},
	getters: {
		allUsersSorted: function (state){
			return state.usersJSON
		}
	}
})
