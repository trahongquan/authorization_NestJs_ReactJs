// // user.model.ts
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
//
// @Schema()
// export class UserDocument extends Document {
//   @Prop({ required: true })
//   email: string;
//
//   @Prop({ required: true })
//   username: string;
//
//   @Prop({ required: true })
//   password: string;
//
//   @Prop({ required: true })
//   id: number;
//
//   @Prop({ required: true })
//   deletedAt: Date;
//
//   @Prop({ required: true })
//   updatedAt: Date;
//
//   @Prop({ required: true })
//   createdAt: Date;
// }
//
// export const UserSchema = SchemaFactory.createForClass(UserDocument);
import { Schema, Document } from 'mongoose';
const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    sdt: String
  },
  {
    collection: 'users',
  },
);
export { UserSchema };
export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  sdt: string
}
