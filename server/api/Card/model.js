import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({

  createdAt: {
    type: Number,
    default: Date.now()
  },

  index: {
    type: Number
  },

  name: {
    type: String,
    required: true
  },

  birthDay: {
    type: String
  },

  departmentId: {
    type: mongoose.Schema.Types.ObjectId
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId
  }
  
})

export default mongoose.model('Card', CardSchema)
