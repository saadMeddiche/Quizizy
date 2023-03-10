import Vuex from "vuex";

export default new Vuex.Store({
 state: {
    Results:[] 
 },
 getters: {},
 mutations: {
    PassResults (state, payload) {
        state.Results = payload
    }
 },
 actions: {}
});