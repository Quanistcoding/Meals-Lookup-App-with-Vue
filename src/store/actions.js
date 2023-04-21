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