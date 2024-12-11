import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ahmedmagdy41:aa412002aa@courses.fw9zbhe.mongodb.net/E-commerce_NestJs',
    ),
    UserModule,
  ],
})
export class AppModule {}
