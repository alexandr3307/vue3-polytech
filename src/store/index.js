import { createStore } from "vuex";

export default createStore({
  state: () => ({
    fields: [
      {
        name: "Фамилия",
        required: false,
        id: 'family',
        content: "",
      },
      {
        name: "Имя",
        required: true,
        id: 'name',
        content: '',
      }
    ]
  }),
  getters: {},
  mutations: {
    deleteField(state, id) {
      state.fields = state.fields.filter(x => {return x.id !== id})
    },
    addNewField(state, item) {
      state.fields.push(item)
    }
  },
  actions: {
  },
  modules: {},
});