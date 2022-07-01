import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from './controllers/login/login.controller';
import { SignupController } from './controllers/signup/signup.controller';
import { SignupService } from './services/signup/signup.service';
import { LoginService } from './services/login/login.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDatabaseModule } from './modules/mongoDatabase.module';
import { RedisCacheModule } from './modules/redisCache.module'


@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    }),
    
    PassportModule,
    MongoDatabaseModule,
    RedisCacheModule
  ],
  controllers: [LoginController, SignupController],
  providers: [SignupService, LoginService],
})
export class AppModule {}
