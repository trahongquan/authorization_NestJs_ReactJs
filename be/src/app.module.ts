import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  //Decorator -- giống Anotation bên java
  imports: [
    UserModule,
    JwtModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
})
export class AppModule {}
