import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      
      useFactory: async (config: ConfigService) => ({
        secret: config.getOrThrow('SECRET_KEY'),
        signOptions: { expiresIn: '60s' }
      })
    }),
  ]  
})
export class JwtAuthModule {}
