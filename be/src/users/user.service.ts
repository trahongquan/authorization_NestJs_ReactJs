import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDocument } from './user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './user.dto';

@Injectable() /** đánh dấu là provider */
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async createUser(userDto: any): Promise<UserDocument> {
  //   return this.userRepository.createUser(userDto);
  // }

  async getAllUsers(): Promise<UserDocument[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<UserDocument> {
    return this.userRepository.getUserById(id);
  }
  async createUser(userDto: CreateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, 10);
    // check exists
    const userInDb = await this.userRepository.findByCondition({
      email: userDto.email,
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    return await this.userRepository.create(userDto);
  }
  async findByLogin({ email, password }: LoginUserDto) {
    const user = await this.userRepository.findByCondition({
      email: email,
    });
    console.log(user);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const is_equal = bcrypt.compareSync(password, user.password);
    if (!is_equal) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
  async findByEmail(email) {
    return await this.userRepository.findByCondition({
      email: email,
    });
  }
}
