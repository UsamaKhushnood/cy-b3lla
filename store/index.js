export const state = () => ({
    registrationDialog: false
  })
  
export const mutations = {
    setRegistrationDialog(state, payload) {
      state.registrationDialog = payload
    },
  }

export const actions = {
    setRegistrationDialog({commit}, payload) {
        commit("setRegistrationDialog", payload)  
    }, 
}