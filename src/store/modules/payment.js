import axios from "axios"
const actions = {
  async getListPayment(context) {
    const response = await axios.get('http://localhost:3000/payments')
    context.commit('SET_PAYMENT', response.data)
    return response.data
  },
  async getListPaymentById(context, request) {
    const response = await axios.get(`http://localhost:3000/payments/${request}`)
    context.commit('SET_PAYMENT_BY_ID', response.data)
    return response.data
  },
  async createLoan(context, request){
    const response = await axios.post('http://localhost:3000/payments', request)
    return response
  },
  async payLoan(context, request){
    console.log(request.id)
    const response = await axios.put(`http://localhost:3000/payments/${request.id}`, request)
    return response
  }
}

const mutations = {
  SET_PAYMENT: (state, response) => {
    state.payments = response
  },
  SET_PAYMENT_BY_ID: (state, response) => {
    state.payment = response
  }
}

const state = {
  payments: [],
  payment: {}
}

export default {
  namespaced: true,
  mutations,
  actions,
  state,
}
