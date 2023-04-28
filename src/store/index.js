import Vuex from 'vuex';

export default new Vuex.Store({
 // estado de la aplicacion 
    state: {
        count: 55,
    },
    mutations: {
    increment(state) {
        state.count++;
    },

    // object  es l nuevo dato 
    modificar(state, object) {
        state.count = object
        }
    },
    actions: {
        // incrementar es el nombre de la accion verdad? 
        // commit llama a la mutacion que modificara al estado 
    incrementar(context) {
        context.commit('increment');
        },
        
        // changeData lo invente xd supongo que si son el nombre de la accion
        // otra forma agregandole un dato nuevo
    changeData({commit}, newDate) {
        commit('modificar', newDate)
    }
    }
});