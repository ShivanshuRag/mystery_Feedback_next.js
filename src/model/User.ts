


import mongoose, { Schema , Document} from "mongoose";

export interface Message extends Document {
   content : string;
   createdAt : Date;
}

const MessageSchema: Schema<Message> = new Schema({
   content:{
        type: String, 
        required: true
   },
    createdAt:{
         type: Date,
         default: Date.now,
         required: true
    }
})


export interface User extends Document{
   username : string,
   email: string,
   password: string,
   verifyCode: string,
   verifyCodeExpiry: Date,
   isAcceptingMessages: boolean,
   isVerified: boolean,
  
   messages: Message[]
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true , "username is reqiured"],
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: [true , "Email is reqiured"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    verifyCode: {
        type: String,
        required: [true, 'Verify Code is required'],
      },
      verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify Code Expiry is required'],
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      isAcceptingMessages: {
        type: Boolean,
        default: true,
      },
      messages: [MessageSchema],
})

const UserModel =  mongoose.models.authusers as mongoose.Model<User> || mongoose.model<User>("authusers" , UserSchema)
 
export default UserModel;