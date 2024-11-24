// user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.model';
import { BaseRepository } from '../base.repository';

@Injectable() /** đánh dấu là provider */
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {
    super(UserModel);
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return this.UserModel.find().exec();
  }

  async getUserById(id: number): Promise<UserDocument> {
    return this.UserModel.findOne({ id: id }).exec();
  }
}
