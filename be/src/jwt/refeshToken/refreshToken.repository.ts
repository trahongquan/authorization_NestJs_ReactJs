// refreshToken.repository.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RefreshToken } from './refreshToken.model';

@Injectable()
export class RefreshTokenRepository {
  constructor(@InjectModel(RefreshToken.name) private refreshTokenModel: Model<RefreshToken>) {}

  async createToken(tokenData: Partial<RefreshToken>): Promise<RefreshToken> {
    const createdToken = new this.refreshTokenModel(tokenData);
    return createdToken.save();
  }

  async findTokenByToken(token: string): Promise<RefreshToken> {
    return this.refreshTokenModel.findOne({ token }).exec();
  }

  async revokeToken(token: string) {
    return this.refreshTokenModel.updateOne({ token }, { revoked: true, revokedAt: new Date() }).exec();
  }
}