import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({

  createdAt: {
    type: Number,
    default: Date.now()
  },

  item : {
    type: String
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId
  },

  cardId: {
    type: mongoose.Schema.Types.ObjectId
  },

  partId: {
    type: mongoose.Schema.Types.ObjectId
  },

  fields: {
    type: Object
  }
  
})

export default mongoose.model('Item', ItemSchema)
