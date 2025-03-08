
import {z} from "zod";

export const usernameValidation = z.string()
   .min(2 , 'username must be 2 char')
   .max(20 , "username max 20 char")
   .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');


export const signInschema = z.object({
   
    username: usernameValidation,
    email: z.string().email({message : 'Invalid email address'}),
    password: z.string().min(6 ,{message: " password must be at least 6 char" })

})