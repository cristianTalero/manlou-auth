import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema({ collection: 'users', timestamps: true })
export class User {

    @Prop({ required: true, type: String })
    readonly name: string

    @Prop({ required: true, type: String, unique: true })
    readonly username: string

    @Prop({ required: true, type: String })
    readonly email: string

    @Prop({ required: true, type: String })
    readonly password: string 
}

export const UserSchema = SchemaFactory.createForClass(User)