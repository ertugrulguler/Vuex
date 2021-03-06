import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({

    state:{
        counter:0,
        clickCount:0,
        thirtCounter:0
    },
    getters:{
        getDoubleCounter(state){
            return state.counter*2;
        },
        clickCounter(state){
            return state.clickCount+" kez tıklandı.";
        }
    },
    mutations:{
        updateCounter(state,value){
            return state.thirtCounter+=value;
        }
    }
})