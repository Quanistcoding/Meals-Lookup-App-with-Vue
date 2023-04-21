import axiosClient from '../axiosClient'

export function setKeyword({commit},Keyword){
    commit('setKeyword',Keyword);
    commit('setIsLoading',true);
    axiosClient.get('search.php?s='+ Keyword).then(({data})=>{
        if(Keyword == '')
            commit('setMealsByName',[]);
        else
            commit('setMealsByName',data.meals);

        commit('setIsLoading',false);
    })
}

export function setSearchLetter({commit},letter){
    commit('setSearchLetter',letter);
    commit('setIsLoading',true);
    axiosClient.get('search.php?f='+ letter).then(({data})=>{
        if(letter == '')
            commit('setMealsByLetter',[]);
        else
            commit('setMealsByLetter',data.meals);

        commit('setIsLoading',false);
    })
}