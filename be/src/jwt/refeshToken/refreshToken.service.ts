// refreshToken.service.ts

import { Injectable } from '@nestjs/common';
import { RefreshTokenRepository } from './refreshToken.repository';
import { RefreshToken } from './refreshToken.model';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly refreshTokenRepository: RefreshTokenRepository) {}

  async createToken(tokenData: Partial<RefreshToken>): Promise<RefreshToken> {
    return this.refreshTokenRepository.createToken(tokenData);
  }

  async findTokenByToken(token: string): Promise<RefreshToken> {
    return this.refreshTokenRepository.findTokenByToken(token);
  }

  async revokeToken(token: string) {
    return this.refreshTokenRepository.revokeToken(token);
  }
}