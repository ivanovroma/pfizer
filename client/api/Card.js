import Api from './Api'

export default {
  async create (credentials) {
    const d = await Api().post('/card/create', credentials)
    return d.data
  },
  async get (credentials) {
    const d = await Api().post('/card/index', credentials)
    return d.data
  },
  async update (credentials) {
    const d = await Api().post('/card/update', credentials)
    return d.data
  },
  async remove (credentials) {
    const d = await Api().post('/card/remove', credentials)
    return d.data
  },

  async writeForm (credentials) {
    const d = await Api().post('/card/write-form', credentials)
    return d.data
  },
  async readForm (credentials) {
    const d = await Api().post('/card/read-form', credentials)
    return d.data
  },

  async createItem (credentials) {
    const d = await Api().post('/card/create-item', credentials)
    return d.data
  },
  async getItemList (credentials) {
    const d = await Api().post('/card/get-item-list', credentials)
    return d.data
  },
  async updateItem (credentials) {
    const d = await Api().post('/card/update-item', credentials)
    return d.data
  },
  async removeItem (credentials) {
    const d = await Api().post('/card/remove-item', credentials)
    return d.data
  }
}
