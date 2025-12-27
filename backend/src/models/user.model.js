import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const UserSchema= new Schema(
    {
        clerkId:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    }
)

export const User=mongoose.model('User',UserSchema)
