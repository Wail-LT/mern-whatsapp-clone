// Import components
import mongoose from 'mongoose'

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    status: String
})

// mongoose.model('model_name', schema, 'collection_name')
export default mongoose.model('message_content', whatsappSchema, 'message_contents')
