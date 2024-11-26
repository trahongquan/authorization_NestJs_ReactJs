// refreshToken.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RefreshToken extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  token: string;

  @Prop({ required: true })
  expires: Date;

  @Prop({ required: true })
  createdByIp: string;

  @Prop({ default: false })
  revoked: boolean;

  @Prop({ default: null })
  revokedAt: Date;

  @Prop({ default: null })
  replacedByToken: string | null;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
