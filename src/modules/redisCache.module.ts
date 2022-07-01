import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store'
import type { RedisClientOptions } from 'redis'


@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [ConfigService],
      
      useFactory: async (config: ConfigService) => (<RedisClientOptions> {
        store: redisStore,
        password: config.getOrThrow('REDIS_PASSWORD')
      })
    }),
  ]
})
export class RedisCacheModule {}
