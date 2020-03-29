import CardApi from '../api/Card'

export const state = () => ({
  list: [],
  pagination: {},
  card: {
    forms: [],
    items: []
  },
  error: ''
})

export const getters = {
  get (state) {
    return state.list
  },
  getByCardId: (state) => (cardId) => {
    for (let i = 0; i < state.list.length; i++) {
      const item = state.list[i]

      if (item._id === cardId) {
        return item
      }
    }
  },
  getError (state) {
    return state.error
  },
  getCard (state) {
    return state.card
  },

  getItemList: (state) => (options) => {
    const items = []

    for (let i = 0; i < state.card.items.length; i++) {
      const item = state.card.items[i]

      if (item.cardId === options.cardId && item.partId === options.partId && item.item === options.item) {
        items.push(item)
      }
    }

    return items
  },
  getPagination (state) {
    return state.pagination
  }
}

export const mutations = {
  set (state, payload) {
    state.list = payload.cards.reverse()
    state.pagination = {
      length: payload.length,
      pages: payload.pages,
      page: payload.page
    }
  },

  create (state, payload) {
    state.list.unshift(payload)
  },

  update (state, payload) {
    const _id = payload._id
    const label = payload.label

    for (let i = 0; i < state.list.length; i++) {
      let department = state.list[i]

      if (department._id === _id) {
        department.label = label
        break
      }
    }
  },

  remove (state, payload) {
    const cardId = payload.cardId

    for (let i = 0; i < state.list.length; i++) {
      let card = state.list[i]
      if (card._id === cardId) {
        state.list.splice(i, 1)
      }
    }
  },

  setError (state, payload) {
    state.error = payload
  },

  clearCard (state) {
    state.card = {
      forms: [],
      items: []
    }
  },

  setForm (state, payload) {
    for (let i = 0; i < state.card.forms.length; i++) {
      const data = state.card.forms[i]

      if (payload.form === data.form) {
        state.card.forms[i] = payload
        return
      }
    }
    state.card.forms.push(payload)
  },

  createItem (state, payload) {
    state.card.items.push(payload)
  },

  setItemList (state, payload) {
    for (let i = 0; i < payload.length; i++) {
      const itemFromDb = payload[i]

      for (let ii = 0; ii < state.card.items.length; ii++) {
        const itemFromStore = state.card.items[ii]

        if (itemFromDb._id === itemFromStore._id) {
          state.card.items.splice(ii, 1)
          ii--
        }
      }

      state.card.items.push(itemFromDb)
    }
  },

  updateItem (state, payload) {
    const _id = payload._id
    const fields = payload.fields

    for (let i = 0; i < state.card.items.length; i++) {
      let item = state.card.items[i]

      if (item._id === _id) {
        item.fields = fields
        break
      }
    }
  },

  removeItem (state, payload) {
    const itemId = payload._id

    for (let i = 0; i < state.card.items.length; i++) {
      let item = state.card.items[i]
      if (item._id === itemId) {
        state.card.items.splice(i, 1)
      }
    }
  }
}

export const actions = {
  async create ({ commit }, payload) {
    const result = await CardApi.create(payload)
    if (result.success) {
      commit('create', result.response)
    }

    return result
  },

  async get ({ commit }, payload) {
    const result = await CardApi.get(payload)
    if (result.success) {
      commit('set', result.response)
    }
  },

  async update ({ commit }, payload) {
    const result = await CardApi.update(payload)
    if (result.success) {
      commit('update', result.response)
    }

    return result
  },

  async remove ({ commit }, payload) {
    const result = await CardApi.remove(payload)
    if (result.success) {
      commit('remove', payload)
    }

    return result
  },

  async clearCard ({ commit }) {
    commit('clearCard', {})
  },

  async writeForm ({ commit }, payload) {
    const result = await CardApi.writeForm(payload)
    if (result.success) {
      commit('setForm', result.response)
    }

    return result
  },

  async readForm ({ commit }, payload) {
    const result = await CardApi.readForm(payload)

    if (result.success && result.response) {
      commit('setForm', result.response)
    }

    return result
  },

  async createItem ({ commit }, payload) {
    const result = await CardApi.createItem(payload)
    if (result.success) {
      commit('createItem', result.response)
    }

    return result
  },

  async getItemList ({ commit }, payload) {
    const result = await CardApi.getItemList(payload)

    if (result.success && result.response) {
      commit('setItemList', result.response)
    }

    return result
  },

  async updateItem ({ commit }, payload) {
    const result = await CardApi.updateItem(payload)

    if (result.success && result.response) {
      commit('updateItem', result.response)
    }

    return result
  },

  async removeItem ({ commit }, payload) {
    const result = await CardApi.removeItem(payload)

    if (result.success && result.response) {
      commit('removeItem', result.response)
    }

    return result
  }
}
