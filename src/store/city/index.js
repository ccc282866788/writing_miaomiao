const state = {
  city: window.localStorage.getItem('city') || '北京市'
}
const mutations = {
  CITY_INFO (state, payload) {
    state.city = payload.city
  }
}
const actions = {

}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
