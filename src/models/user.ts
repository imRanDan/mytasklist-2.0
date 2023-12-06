import mongoose, { Schema, model, Model, Document } from 'mongoose'

interface IUser extends Document {
    email: string;
    password: string;
    // More properties to add later (if you want)
}

const userSchema: Schema = new Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // More fields to come when needed
})

const User: Model<IUser> = mongoose.models.User || model('User', userSchema)

export default User